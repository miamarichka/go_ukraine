import { Link, useParams } from 'react-router-dom';
import React from 'react';
import classNames from 'classnames';
import { ReactComponent as Chernihiv } from '../../regionIcons/Chernihiv.svg';
import { ReactComponent as Chernivtsi } from '../../regionIcons/Chernivtsi.svg';
import { ReactComponent as Kropyvnytskyi } from '../../regionIcons/Kropyvnytskyi.svg';
import { ReactComponent as Dnipro } from '../../regionIcons/Dnipro.svg';
import { ReactComponent as IvanoFransivsk } from '../../regionIcons/Ivano-Frankivsk.svg';
import { ReactComponent as Kharkiv } from '../../regionIcons/Kharkiv.svg';
import { ReactComponent as Kmelnytskiy } from '../../regionIcons/Khmelnytskyi.svg';
import { ReactComponent as Kyiv } from '../../regionIcons/Kyiv.svg';
import { ReactComponent as Luhansk } from '../../regionIcons/Luhansk.svg';
import { ReactComponent as Lutsk } from '../../regionIcons/Lutsk.svg';
import { ReactComponent as Lviv } from '../../regionIcons/Lviv.svg';
import { ReactComponent as Odesa } from '../../regionIcons/Odesa.svg';
import { ReactComponent as Poltava } from '../../regionIcons/Poltava.svg';
import { ReactComponent as Rivne } from '../../regionIcons/Rivne.svg';
import { ReactComponent as Simfiropol } from '../../regionIcons/Simfiropol.svg';
import { ReactComponent as Sumy } from '../../regionIcons/Sumy.svg';
import { ReactComponent as Ternopil } from '../../regionIcons/Ternopil.svg';
import { ReactComponent as Uzhhorod } from '../../regionIcons/Uzhhorod.svg';
import { ReactComponent as Vinnytsia } from '../../regionIcons/Vinnytsia.svg';
import { ReactComponent as Zaporizhia } from '../../regionIcons/Zaporizhia.svg';
import { ReactComponent as Zhytomyr } from '../../regionIcons/Zhytomyr.svg';
import { ReactComponent as Cherkasy } from '../../regionIcons/Cherkasy.svg';
import { ReactComponent as Mykolayiv } from '../../regionIcons/Mykolaiv.svg';
import { ReactComponent as Kherson } from '../../regionIcons/Kherson.svg';
import { ReactComponent as Donetsk } from '../../regionIcons/Donetsk.svg';
import { RegionList, RegionItem, MainText, SubText, TextWrapper, MapWrapper } from './MainMap.styled';

export const MainMap = () => {
  const { selectedCity } = useParams();

  const handleHover = (event) => {
    event.target.style.filter = 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4)';
  };

  const handleMouseOut = (event) => {
    event.target.style.filter = 'drop-shadow(10px 10px 27px -4px rgba(238,255,0,1))';
  };

  const shadowStyle = {
  };

  return (
    <div>
      <TextWrapper>
        <MainText>Incredible land of brave people </MainText>
        <SubText>Choose the city you want to visit</SubText>
      </TextWrapper>
      <MapWrapper>
        <RegionList className="region1">
          <RegionItem
            key="Lutsk"
            className={classNames('Lutsk', {
              'is-active': selectedCity === 'Lutsk',
            })}
          >
            <Link
              to="../Lutsk"
              replace
            >
              <Lutsk
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Rivne"
            className={classNames('Rivne', {
              'is-active': selectedCity === 'Rivne',
            })}
          >
            <Link
              to="../Rivne"
              replace
            >
              <Rivne
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Zhytomyr"
            className={classNames('Zhytomyr', {
              'is-active': selectedCity === 'Zhytomyr',
            })}
          >
            <Link
              to="../Zhytomyr"
              replace
            >
              <Zhytomyr
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Kyiv"
            className={classNames('Kyiv', {
              'is-active': selectedCity === 'Kyiv',
            })}
          >
            <Link
              to="../Kyiv"
              replace
            >
              <Kyiv
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Chernihiv"
            className={classNames('Chernihiv', {
              'is-active': selectedCity === 'Chernihiv',
            })}
          >
            <Link
              to="../Chernihiv"
              replace
            >
              <Chernihiv
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Sumy"
            className={classNames('Sumy', {
              'is-active': selectedCity === 'Sumy',
            })}
          >
            <Link
              to="../Sumy"
              replace
            >
              <Sumy
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
        </RegionList>
        <RegionList className="region2">
          <RegionItem
            key="Lviv"
            className={classNames('Lviv', {
              'is-active': selectedCity === 'Lviv',
            })}
          >
            <Link
              to="../Lviv"
              replace
            >
              <Lviv
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Ternopil"
            className={classNames('Ternopil', {
              'is-active': selectedCity === 'Ternopil',
            })}
          >
            <Link
              to="../Ternopil"
              replace
            >
              <Ternopil
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Kmelnytskiy"
            className={classNames('Kmelnytskiy', {
              'is-active': selectedCity === 'Kmelnytskiy',
            })}
          >
            <Link
              to="../Kmelnytskiy"
              replace
            >
              <Kmelnytskiy
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Vinnytsia"
            className={classNames('Vinnytsia', {
              'is-active': selectedCity === 'Vinnytsia',
            })}
          >
            <Link
              to="../Vinnytsia"
              replace
            >
              <Vinnytsia
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Cherkasy"
            className={classNames('Cherkasy', {
              'is-active': selectedCity === 'Cherkasy',
            })}
          >
            <Link
              to="../Cherkasy"
              replace
            >
              <Cherkasy
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Poltava"
            className={classNames('Poltava', {
              'is-active': selectedCity === 'Poltava',
            })}
          >
            <Link
              to="../Poltava"
              replace
            >
              <Poltava
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Kharkiv"
            className={classNames('Kharkiv', {
              'is-active': selectedCity === 'Kharkiv',
            })}
          >
            <Link
              to="../Kharkiv"
              replace
            >
              <Kharkiv
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
        </RegionList>
        <RegionList className="region3">
          <RegionItem
            key="Uzhhorod"
            className={classNames('Uzhhorod', {
              'is-active': selectedCity === 'Uzhhorod',
            })}
          >
            <Link
              to="../Uzhhorod"
              replace
            >
              <Uzhhorod
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="IvanoFransivsk"
            className={classNames('IvanoFransivsk', {
              'is-active': selectedCity === 'IvanoFransivsk',
            })}
          >
            <Link
              to="../IvanoFransivsk"
              replace
            >
              <IvanoFransivsk
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Chernivtsi"
            className={classNames('Chernivtsi', {
              'is-active': selectedCity === 'Chernivtsi',
            })}
          >
            <Link
              to="../Chernivtsi"
              replace
            >
              <Chernivtsi
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Kropyvnytskyi"
            className={classNames('Kropyvnytskyi', {
              'is-active': selectedCity === 'Kropyvnytskyi',
            })}
          >
            <Link
              to="../Kropyvnytskyi"
              replace
            >
              <Kropyvnytskyi
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Dnipro"
            className={classNames('Dnipro', {
              'is-active': selectedCity === 'Dnipro',
            })}
          >
            <Link
              to="../Dnipro"
              replace
            >
              <Dnipro
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Donetsk"
            className={classNames('Donetsk', {
              'is-active': selectedCity === 'Donetsk',
            })}
          >
            <Link
              to="../Donetsk"
              replace
            >
              <Donetsk
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Luhansk"
            className={classNames('Luhansk', {
              'is-active': selectedCity === 'Luhansk',
            })}
          >
            <Link
              to="../Luhansk"
              replace
            >
              <Luhansk
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
        </RegionList>
        <RegionList className="region4">
          <RegionItem
            key="Odesa"
            className={classNames('Odesa', {
              'is-active': selectedCity === 'Odesa',
            })}
          >
            <Link
              to="../Odesa"
              replace
            >
              <Odesa
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Mykolayiv"
            className={classNames('Mykolayiv', {
              'is-active': selectedCity === 'Mykolayiv',
            })}
          >
            <Link
              to="../Mykolayiv"
              replace
            >
              <Mykolayiv
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Zaporizhia"
            className={classNames('Zaporizhia', {
              'is-active': selectedCity === 'Zaporizhia',
            })}
          >
            <Link
              to="../Zaporizhia"
              replace
            >
              <Zaporizhia
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Kherson"
            className={classNames('Kherson', {
              'is-active': selectedCity === 'Kherson',
            })}
          >
            <Link
              to="../Kherson"
              replace
            >
              <Kherson
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
          <RegionItem
            key="Simfiropol"
            className={classNames('Simfiropol', {
              'is-active': selectedCity === 'Simfiropol',
            })}
          >
            <Link
              to="../Simfiropol"
              replace
            >
              <Simfiropol
                className="svgRegion"
                style={shadowStyle}
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </RegionItem>
        </RegionList>
      </MapWrapper>
    </div>
  );
};
