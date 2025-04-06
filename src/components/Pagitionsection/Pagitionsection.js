import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import { ProjectImage, ProjectInfo, ProjectTags } from '../Latest Projects/LatestProjectsStyles';
import img1 from '../../assets/villa4.jpeg';
import img2 from '../../assets/v5.jpeg';
import img3 from '../../assets/v6.jpeg';
import img4 from '../../assets/arch1.jpeg';
import img5 from '../../assets/img4.jpeg';
import img6 from '../../assets/img5.jpeg';
import img7 from '../../assets/arch2.jpeg';
import img8 from '../../assets/arch4.jpeg';
import img9 from '../../assets/img6.jpeg';
import img10 from '../../assets/villa.jpeg';
import img11 from '../../assets/villa2.jpeg';
import img12 from '../../assets/villa3.jpeg';
import styled, { keyframes } from 'styled-components';
import { Title } from '../Whoweare/TextContent';

const itemsPerPage = 6; // 6 items per page (2 rows x 3 columns)
const data = [
  { id: 1, image: img6, tags: ['Architecture', 'Furniture'], title: 'Townhouse in San Jose', text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.' },
  { id: 2, image: img3, tags: ['Furniture', 'Interior Design'], title: 'Home Renovation & Interior Design', text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.' },
  { id: 3, image: img4, tags: ['Furniture', 'Interior Design'], title: 'Private Villa B63', text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.' },
  { id: 4, image: img5, tags: ['Interior Design', 'Furniture'], title: 'Townhouse in San Jose', text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.' },
  { id: 5, image: img2, tags: ['Interior Design', 'Furniture'], title: 'Townhouse in San Jose', text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.' },
  { id: 6, image: img1, tags: ['Interior Design', 'Furniture'], title: 'Townhouse in San Jose', text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.' },
  { id: 7, image: img7, tags: ['Architecture', 'Furniture'], title: 'Townhouse in San Jose', text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.' },
  { id: 8, image: img8, tags: ['Furniture', 'Interior Design'], title: 'Home Renovation & Interior Design', text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.' },
  { id: 9, image: img9, tags: ['Furniture', 'Interior Design'], title: 'Private Villa B63', text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.' },
  { id: 10, image: img10, tags: ['Interior Design', 'Furniture'], title: 'Townhouse in San Jose', text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.' },
  { id: 11, image: img11, tags: ['Interior Design', 'Furniture'], title: 'Townhouse in San Jose', text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.' },
  { id: 12, image: img12, tags: ['Interior Design', 'Furniture'], title: 'Townhouse in San Jose', text: 'This area is a brief description of the project. You can choose to show or hide it. This is a sample short paragraph.' },
];

export default function PaginatedList() {
  const [page, setPage] = useState(1);

  // Calculate total pages
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Get the items for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} alignItems="center" marginTop={''}>
      <Title style={{ marginTop: '55px' }}>
        <h2 className="fsz-45" style={{ fontFamily: "Inter" }}>
          Latest Projects
        </h2>
      </Title>

      <Grid container spacing={2} justifyContent="center" width="80%">
        {currentItems.map((item) => (
          <Grid item xs={10} sm={6} md={4} key={item.id}>
            <ProjectCard>
              <a href={item.image} data-fancybox="proj">
                <ProjectImage src={item.image} alt={item.title} />
              </a>
              <ProjectInfo>
                <ProjectTags>
                  {item.tags.map((tag, index) => (
                    <a key={index} href="#">
                      {tag}
                    </a>
                  ))}
                </ProjectTags>
                <h3>{item.title}</h3>
                <div>{item.text}</div>
              </ProjectInfo>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>

      <Pagination count={pageCount} page={page} onChange={handlePageChange} />
    </Stack>
  );
}

export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(90px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ProjectCard = styled.div`
  background: #fff;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  cursor: pointer;

  /* Start hidden (optional) */
  opacity: 0;
  transform: translateY(90px);

  /* Apply the fadeInUp animation */
  animation: ${fadeInUp} 1s ease forwards;

  /* Delay for odd/even items, if desired */
  &:nth-child(odd) {
    animation-delay: 0.4s;
  }
  &:nth-child(even) {
    animation-delay: 0.8s;
  }

  transition: transform 0.6s ease, box-shadow 0.6s ease;

  &:hover {
    transform: scale(1.05) rotate(0.5deg);
    box-shadow: 0 12px 18px rgba(0, 0, 0, 0.2);
  }
`;

