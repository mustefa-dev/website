import React, { useEffect, useState } from 'react';
import { axiosService } from '@/api/axios-service';
import apiHelper from '@/api/api-helper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ImageModal from "@/components/ImageModal";

const useStyles = makeStyles((theme) => ({
    card: {
        border: '1px solid #ddd',
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: theme.shadows[3],
        margin: theme.spacing(2),
        width: 415,
        height: 480,
        display: 'flex',
        flexDirection: 'column',
    },
    media: {
        height: 250,
        borderBottom: '1px solid #ddd',
        borderRadius: '8px 8px 0 0',
        cursor: 'pointer',
        objectFit: 'cover',
    },
    content: {
        padding: theme.spacing(2),
        flex: 1,
    },
    actions: {
        justifyContent: 'space-between',
        padding: theme.spacing(1, 2),
    },
}));

type Props = {
    subdomain: string;
};

type BlogData = {
    title: string;
    content: string;
    image: string[];
    userId: string;
    id: string;
    creationDate: string;
};

type ApiResponse = {
    data: BlogData[];
    pagesCount: number;
    currentPage: number;
    type: string;
    totalCount: number;
};

const BlogComponent: React.FC<Props> = ({ subdomain }) => {
    const classes = useStyles();
    const [blogs, setBlogs] = useState<BlogData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [selectedBlogIndex, setSelectedBlogIndex] = useState<number | null>(null);

    useEffect(() => {
        if (subdomain) {
            axiosService
                .get(apiHelper.WEBSITE.GET_BLOGS(subdomain))
                .then((response) => {
                    const apiResponse: ApiResponse = response.data;
                    setBlogs(apiResponse.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('There was an error fetching the blog data!', error);
                    setError(true);
                    setLoading(false);
                });
        }
    }, [subdomain]);

    const handleImageClick = (blogIndex: number, imageIndex: number) => {
        setSelectedBlogIndex(blogIndex);
        setSelectedImageIndex(imageIndex);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImageIndex(null);
        setSelectedBlogIndex(null);
    };

    const handleNextImage = () => {
        if (
            selectedBlogIndex !== null &&
            selectedImageIndex !== null &&
            blogs[selectedBlogIndex].image.length > 0
        ) {
            setSelectedImageIndex(
                (selectedImageIndex + 1) % blogs[selectedBlogIndex].image.length
            );
        }
    };

    const handlePrevImage = () => {
        if (
            selectedBlogIndex !== null &&
            selectedImageIndex !== null &&
            blogs[selectedBlogIndex].image.length > 0
        ) {
            setSelectedImageIndex(
                (selectedImageIndex - 1 + blogs[selectedBlogIndex].image.length) %
                blogs[selectedBlogIndex].image.length
            );
        }
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return <Typography color="error">Error: Could not load blog data.</Typography>;
    }

    return (
        <Grid container spacing={3}>
            {blogs.map((blog, blogIndex) => (
                <Grid item xs={12} sm={6} md={4} key={blog.id}>
                    <Card className={classes.card}>
                        {blog.image.length > 0 && (
                            <CardMedia
                                component="img"
                                className={classes.media}
                                image={blog.image[0]}
                                alt={blog.title}
                                onClick={() => handleImageClick(blogIndex, 0)}
                            />
                        )}
                        <CardContent className={classes.content}>
                            <Typography variant="h6" component="h2" gutterBottom>
                                {blog.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" paragraph>
                                {blog.content.length > 100 ? blog.content.slice(0, 100) + '...' : blog.content}
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.actions}>
                            <Button size="small" color="primary">
                                Read More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
            <ImageModal
                isOpen={isModalOpen}
                imageSrc={
                    selectedBlogIndex !== null &&
                    selectedImageIndex !== null &&
                    blogs.length > 0 &&
                    blogs[selectedBlogIndex].image[selectedImageIndex]
                        ? blogs[selectedBlogIndex].image[selectedImageIndex]
                        : ''
                }
                onClose={handleCloseModal}
                onNext={handleNextImage}
                onPrev={handlePrevImage}
            />
        </Grid>
    );
};

export default BlogComponent;
