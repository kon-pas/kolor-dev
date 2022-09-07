import styles from '@styles/pages/gradient/[pid].module.scss';
import type { NextPage, GetServerSideProps } from 'next';
import TextUnderline from '@components/TextUnderline';
import Gradient from '@components/Gradient';
import Color from '@components/Color';
import IconSVG from '@components/IconSVG';
import { GradientScheme } from '@interfaces';

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
          Buttons
        </div>

        <div className={styles['buttons__right']}>
          Buttons
        </div>
      </div>

      <div className={styles['colors-list']}>
        {gradient.colors.map((color, idx, colors) => 
          <div
            className={styles['colors-list__color']}
            key={idx}
          >
            <Color hex={color}>
              {color}
            </Color>
            
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