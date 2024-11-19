import React from 'react';
import styled from 'styled-components';
import NovelIcon from '../assets/novel.png'; 
import BiographyIcon from '../assets/biography.png';
import ComicsIcon from '../assets/comic.png';
import MagazineIcon from '../assets/magazine.png';
import DictionaryIcon from '../assets/Dictionary.png';
import ScriptIcon from '../assets/script.png';
import MangaIcon from '../assets/manga.png';
import EncyclopediaIcon from '../assets/encyclopedia.png';

const CategoriesContainer = styled.div`
  margin: 20px 0;
`;

const CategoryHeader = styled.h2`
  text-align: left;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight:bold;
`;

const CategoriesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
`;

const CategoryIconContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;  
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0; 
  margin-bottom: 10px;
`;

const CategoryIcon = styled.img`
  width: 60px;
  height: 60px;
`;

const CategoryName = styled.p`
  font-size: 16px;
`;

const Categories = () => {
  return (
    <CategoriesContainer>
      <CategoryHeader>CATEGORIES</CategoryHeader>
      <CategoriesGrid>
        <Category>
          <CategoryIconContainer>
            <CategoryIcon src={NovelIcon} alt="Novel" />
          </CategoryIconContainer>
          <CategoryName>Novel</CategoryName>
        </Category>
        <Category>
          <CategoryIconContainer>
            <CategoryIcon src={BiographyIcon} alt="Biography" />
          </CategoryIconContainer>
          <CategoryName>Biography</CategoryName>
        </Category>
        <Category>
          <CategoryIconContainer>
            <CategoryIcon src={ComicsIcon} alt="Comics" />
          </CategoryIconContainer>
          <CategoryName>Comics</CategoryName>
        </Category>
        <Category>
          <CategoryIconContainer>
            <CategoryIcon src={MagazineIcon} alt="Magazine" />
          </CategoryIconContainer>
          <CategoryName>Magazine</CategoryName>
        </Category>
        <Category>
          <CategoryIconContainer>
            <CategoryIcon src={DictionaryIcon} alt="Dictionary" />
          </CategoryIconContainer>
          <CategoryName>Dictionary</CategoryName>
        </Category>
        <Category>
          <CategoryIconContainer>
            <CategoryIcon src={ScriptIcon} alt="Script" />
          </CategoryIconContainer>
          <CategoryName>Script</CategoryName>
        </Category>
        <Category>
          <CategoryIconContainer>
            <CategoryIcon src={MangaIcon} alt="Manga" />
          </CategoryIconContainer>
          <CategoryName>Manga</CategoryName>
        </Category>
        <Category>
          <CategoryIconContainer>
            <CategoryIcon src={EncyclopediaIcon} alt="Encyclopedia" />
          </CategoryIconContainer>
          <CategoryName>Encyclopedia</CategoryName>
        </Category>
      </CategoriesGrid>
    </CategoriesContainer>
  );
};

export default Categories;

