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
        { url: 'https://commons.wikimedia.org/wiki/File:Tutoriel_-_S%27encorder_sur_un_glacier_et_anneaux_de_buste_-_%C3%89cole_de_glace_-2.webm?embedplayer=yes', title: 'Introduction to Plant Hormones', name: 'Botanical Growth Insights' }
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
        { url: 'https://commons.wikimedia.org/wiki/File:Tutoriel_-_S%27encorder_sur_un_glacier_et_anneaux_de_buste_-_%C3%89cole_de_glace_-2.webm?embedplayer=yes', title: 'Urban Farming Innovations', name: 'Innovative Horticultural Techniques' }
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
    <div className="articles-page">
      <h1>ARTICLES</h1>
      <p>Explore a variety of articles covering topics related to plant growth, urban farming, and gardening.  <br></br> Dive into insightful content and enrich your knowledge to cultivate healthier plants and sustainable environments.</p>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article darken-on-hover">
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
                <h3>VIDEO TUTORIAL</h3>
                {article.videos.map((video, videoIndex) => (
                  <div key={videoIndex} className="video">
                    <iframe
                      src={video.url}
                      width="560"
                      height="315"
                      frameBorder="0"
                      allowFullScreen
                      title={video.title}
                    ></iframe>
                    <p>{video.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
