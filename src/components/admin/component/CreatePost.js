import React from 'react'
import { isEmpty, startCase } from 'lodash'
import { withStyles } from '@material-ui/styles';
import { toast } from 'react-toastify';
import { TextField, FormControl, Grid, Select, MenuItem, InputLabel, Button } from '@material-ui/core';
import Title from 'components/common/components/Title'
import { OrangeButton } from 'components/common/components/Button'


const styles = theme => ({
    root: {
        width: '100%'
    },
    textField: {
        width: '100%',
        [`& fieldset`]: {
            borderRadius: 0,
        }
    },
    fileUploadField: {
        width: '100%',
        textTransform: 'capitalize'
    },
    input: {
        width: '100%'
    },
    inputBase: {
        width: '100%'
    },
});

const initialState = {
    title: '',
    description: '',
    primary_image: null,
    primary_image_name: "",
    secondary_images: '',
    hero_post: false,
    category: '',
    available: false, // in case of products
    error: {}
};

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState
    }
    componentDidMount() {
        //
    }
    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
            error: {
                [e.target.name]: !e.target.value ? 'Required' : null,
            }
        })
    }
    selectFile = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.files[0],
            primary_image_name: e.target.value,
            error: {
                [e.target.name]: null,
            }
        })
    }
    handleErrorOnSubmit = () => {
        if (isEmpty(this.state.error)) {
            this.setState({
                error: {
                    title: !this.state.title ? "Required" : null,
                    description: !this.state.description ? "Required" : null,
                    available: !this.state.available ? "Required" : null,
                    primary_image: !this.state.primary_image ? "Required" : null,
                    secondary_images: !this.state.secondary_images ? "Required" : null,
                    hero_post: !this.state.hero_post ? "Required" : null,
                    category: !this.state.category ? "Required" : null,
                }
            });
            return false;
        }
        if (!this.state.title || !this.state.description || !this.state.category || !this.state.primary_image) {
            this.setState({
                error: {
                    title: !this.state.title ? "Required" : null,
                    description: !this.state.description ? "Required" : null,
                    primary_image: !this.state.primary_image ? "Required" : null,
                    category: !this.state.category ? "Required" : null,
                }
            });
            return false;
        }
        return true;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const isErrorFree = this.handleErrorOnSubmit();
        if (isErrorFree) {
            let formData = new FormData();
            formData.append('primary_image', 'Not defined');
            formData.append('image_file', this.state.primary_image);
            formData.append('title', this.state.title);
            formData.append('description', this.state.description);
            formData.append('available', this.state.available);
            formData.append('hero_post', this.state.hero_post);
            formData.append('category', this.state.category);

            /* send data to server */
            this.props.createPost(formData, this.state.category)
        } else {
            // Show Error Message
            toast.error("Please follow the error message and try again!")
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.post_created !== prevProps.post_created && this.props.post_created) {
            toast.info(`${startCase(this.state.category)} created successfully!`);
            this.setState(initialState);
        }
    }

    render() {
        const { classes } = this.props;
        const { postCategories } = this.props;

        const categoriesOptions = postCategories.map(each => {
            return (
                <MenuItem value={each.name} key={each.id}>{each.name}</MenuItem>
            );
        })
        return (
            <div>
                <Title fontSize={"28px"} text={"Create post"} />
                <form
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                    onSubmit={this.handleSubmit}
                    encType="multipart/form-data"
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                value={this.state.title}
                                label="Title"
                                name="title"
                                onChange={this.handleInputChange}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                error={!!this.state.error.title}
                                helperText={this.state.error.title}
                            />
                            <TextField
                                value={this.state.description}
                                label="Description"
                                name="description"
                                onChange={this.handleInputChange}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                multiline
                                rowsMax={10}
                                rows={8}
                                error={!!this.state.error.description}
                                helperText={this.state.error.description}
                            />
                            <br />
                            <br />
                            {
                                this.state.category === 'product'
                                    ? (
                                        <React.Fragment>
                                            <Grid item xs={12} sm={12} md={12}>
                                                <FormControl
                                                    variant="outlined"
                                                    style={{
                                                        minWidth: 320,
                                                    }}
                                                >
                                                    <InputLabel

                                                        id="available-label">
                                                        Available
                                                    </InputLabel>
                                                    <Select
                                                        labelId="available-label"
                                                        id="available"
                                                        value={this.state.available}
                                                        name={"available"}
                                                        onChange={this.handleInputChange}
                                                        variant={"outlined"}
                                                        style={{
                                                            width: '100%',
                                                            borderRadius: 0
                                                        }}
                                                    >
                                                        <MenuItem value={true}>True</MenuItem>
                                                        <MenuItem value={false}>False</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <br />
                                        </React.Fragment>)
                                    : null
                            }
                            <Button
                                variant="outlined"
                                component="label"
                                className={classes.fileUploadField}
                            >
                                Primary image
                                <input
                                    // value={this.state.primary_image}
                                    name="primary_image"
                                    required
                                    onChange={this.selectFile}
                                    value={this.state.primary_image_name}
                                    margin="normal"
                                    variant="outlined"
                                    className={classes.fileUploadField}
                                    type={"file"}
                                    accept="image/*"
                                    error={!!this.state.error.primary_image}
                                    helperText={this.state.error.primary_image}
                                />
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <FormControl
                                variant="outlined"
                                style={{
                                    minWidth: 320,
                                }}
                            >
                                <InputLabel

                                    id="hero_post-label">
                                    Hero post
                                    </InputLabel>
                                <Select
                                    labelId="hero_post-label"
                                    id="hero_post"
                                    value={this.state.hero_post}
                                    name={"hero_post"}
                                    onChange={this.handleInputChange}
                                    variant={"outlined"}
                                    style={{
                                        width: '100%',
                                        borderRadius: 0
                                    }}
                                >
                                    <MenuItem value={true}>True</MenuItem>
                                    <MenuItem value={false}>False</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <br />

                        <Grid item xs={12} sm={12} md={12}>
                            <FormControl
                                variant="outlined"
                                style={{
                                    minWidth: 320,
                                }}
                            >
                                <InputLabel

                                    id="category-label">
                                    Post category
                                    </InputLabel>
                                <Select
                                    labelId="category-label"
                                    id="category"
                                    value={this.state.category}
                                    name={"category"}
                                    onChange={this.handleInputChange}
                                    variant={"outlined"}
                                    style={{
                                        width: '100%',
                                        borderRadius: 0
                                    }}
                                    error={!!this.state.error.category}
                                    helperText={this.state.error.category}
                                >
                                    {categoriesOptions}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <br />

                    {/* Action buttons */}
                    <Grid container spacing={0}>
                        <Grid item xs={6} sm={5} md={5}>
                            <OrangeButton
                                Primary={true}
                                label={"submit"}
                                type={"submit"}
                                style={{ backgroundColor: '#f65314' }}
                            >
                                Submit
                                </OrangeButton>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}
export default withStyles(styles)(CreatePost);
