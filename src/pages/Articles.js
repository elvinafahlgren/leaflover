import React from 'react';
import '../styles/Articles.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Articles = () => {
  // Mock articles data
  const articles = [
    {
      id: 1,
      title: 'Unlocking the Secrets of Green Growth: How Plant Hormones Dictate Success',
      content: 'Explore how plant hormones drive growth and respond to the environment, optimizing cultivation for better yields and healthier crops.',
      photos: [
        { url: 'https://source.unsplash.com/800x600/?plants', title: 'Botanical Harmony' },
        { url: 'https://source.unsplash.com/800x600/?nature', title: 'Natural Elegance' }
      ]
    },
    {
      id: 2,
      title: 'Introduction to Plant Hormones',
      videos: [
        { id: 'VIDEO_ID_1', title: 'Introduction to Plant Hormones', name: 'Botanical Growth Insights' }
      ]
    },
    {
      id: 3,
      title: 'Revolutionizing Urban Farming: Vertical Gardens Taking Root in City Skylines',
      content: 'Discover vertical gardens, transforming cityscapes into green spaces. Learn how they maximize land use efficiency and reduce carbon footprints for a sustainable urban future.',
      photos: [
        { url: 'https://source.unsplash.com/800x600/?urban-garden', title: 'Urban Oasis' },
        { url: 'https://source.unsplash.com/800x600/?vertical-farming', title: 'Skyward Harvest' },
        { url: 'https://source.unsplash.com/800x600/?city-green', title: 'Metropolitan Greenery' },
        { url: 'https://source.unsplash.com/800x600/?green-building', title: 'Eco-Construction' }
      ],
      videos: [
        { id: 'VIDEO_ID_3', title: 'Urban Farming Innovations', name: 'Innovative Horticultural Techniques' }
      ]
    }, 
    {
      id: 4,
      title: 'From Seed to Harvest: Nurturing Plant Parenthood for Beginners',
      content: 'Embark on a journey into the basics of plant care and cultivation with expert tips for budding gardeners. This guide will empower you to cultivate green thumbs and bountiful harvests.', 
      photos: [
        { url: 'https://source.unsplash.com/800x600/?gardening', title: 'Cultivation Bliss' }
      ]
    }
  ];

  return (
    <div className="articles-container">
      {articles.map((article, index) => (
        <div key={index} className="article darken-on-hover"> {/* Added className here */}
          <a href={`#${article.id}`} className="article-link">
            <h2>{article.title}</h2>
          </a>
          <p>{article.content}</p>
          {article.photos && (
            <div className="photo-carousel">
              <Carousel>
                {article.photos.map((photo, photoIndex) => (
                  <div key={photoIndex}>
                    <img src={photo.url} alt={photo.title} />
                    <p className="legend">{photo.title}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          )}
          {article.videos && (
            <div className="video-container">
              <h3>VIDEO TUTORIAL</h3> {/* Added header for videos */}
              {article.videos.map((video, videoIndex) => (
                <div key={videoIndex} className="video">
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p>{video.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Articles;
