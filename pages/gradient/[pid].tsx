import styles from '@styles/pages/gradient/[pid].module.scss';
import type { NextPage, GetServerSideProps } from 'next';
import TextUnderline from '@components/TextUnderline';
import Gradient from '@components/Gradient';
import Color from '@components/Color';
import IconSVG from '@components/IconSVG';
import Button from '@components/Button';
import { GradientScheme } from '@interfaces';
import getCleanHex from '@utils/getCleanHex';
import Tag from '@components/Tag';

interface GradientPidProps {
  gradient: GradientScheme
}

const GradientPid: NextPage<GradientPidProps> = ({
  gradient
}) => {
  return (
    <section className={styles['gradient-id']}>
      <header className={styles['header']}>
        <h1 className={styles['header__heading']}>
          <TextUnderline
            colors={gradient.colors}
          >
            {gradient.title}
          </TextUnderline>
        </h1>
      </header>

      <div className={styles['gradient']}>
        <Gradient colors={gradient.colors}/>
      </div>

      <div className={styles['buttons']}>
        <div className={styles['buttons__left']}>
          <Button label='Save'>
            <IconSVG>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </IconSVG>
          </Button>
        </div>

        <div className={styles['buttons__right']}>
          <Button label="Link">
            <IconSVG>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </IconSVG>
          </Button>

          <Button label="Image">
            <IconSVG>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </IconSVG>
          </Button>

          <Button label="Edit">
            <IconSVG>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </IconSVG>
          </Button>
        </div>
      </div>

      <div className={styles['colors-list']}>
        { gradient.colors.map((color, idx, colors) =>
          <div
            className={styles['colors-list__item']}
            key={idx}
          >
            <div className={styles['colors-list__color']}>
              <Color hex={color}>
                {getCleanHex(color)}
              </Color>
            </div>

            { idx+1 !== colors.length &&
              <div className={styles['colors-list__arrow']}>
                <IconSVG>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                  />
                </IconSVG>
              </div>
            }
          </div>
        )}
      </div>

      {/* <section className={styles['actions']}>
        <header>
          <h1>
            Want to edit this gradient?
          </h1>

          <h1>
            Or create a new one!
          </h1>
        </header>
      </section> */}

      <div className={styles['tags']}>
        <div className={styles['tags__color-tags']}>
          { gradient.tags?.mainColors.map((color, idx) => 
            <Tag
              type='color'
              key={idx}
            >
              {color}
            </Tag>
          )}
        </div>

        <div className={styles['tags__hash-tags']}>
          { gradient.tags?.misc.map((label, idx) => 
            <Tag
              type='hash'
              key={idx}
            >
              {label}
            </Tag>
          )}
        </div>
      </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/gradient/${context.query.pid}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  });

  const gradient = await res.json()

  return {
    props: {
      gradient
    }
  }
}

export default GradientPid;