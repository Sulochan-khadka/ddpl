import React from 'react';
import './projects.css';
import image1 from '../assets/img/projects/61YCKpWtaiL._AC_UF894,1000_QL80_.jpg';
import image2 from '../assets/img/projects/Patch-Notes-for-the-Valheim-0.217.14-Update.jpeg';
import image3 from '../assets/img/projects/capsule_616x353.jpg';
import image4 from '../assets/img/projects/default.jpg.webp';
import image5 from '../assets/img/projects/medium-vposter1123302-minecraft-poster-wallpaper-liveposter-original-imagka7n9aw9mmsb.jpeg.webp';
import './projects.css';
// import HorizontalScroll from 'react-scroll-horizontal';
const Projects = () => {
  const banners = [
    {
      id: 1,
      title: 'Angular',
      description: 'Mind Blowing projects with angular.',
      image: image1,
    },
    {
      id: 2,
      title: 'Vue',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: image2,
    },
    {
      id: 3,
      title: 'Numpy',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image: image3,
    },
    {
      id: 4,
      title: 'NodeJs',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image: image4,
    },
    {
      id: 5,
      title: 'React',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image: image5,
    },
  ];
  return (
    <div className='project-container'>
      <div className='project-horizontal'>
        {/* <HorizontalScroll> */}
          {banners.map((item, index) => {
            return (
              <div key={index} className='image-div'>
                <img
                  src={item.image}
                  alt='image_of_projects'
                  className='image-project'
                />
              </div>
            );
          })}
        {/* </HorizontalScroll> */}
      </div>
      <div className='project-horizontal'>
        {banners.map((item, index) => {
          return (
            <div key={index} className='image-div'>
              <img
                src={item.image}
                alt='image_of_projects'
                className='image-project'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
