
import styles from "./Card.module.scss";

type CardProps = {
  data: {
    id: string
    name: string
    status: string
    species: string
    gender: string
    origin: {
      name: string
    }
    location: {
      name: string
    }
    image: string
  }[]
};

const Card = ({ data }: CardProps) => {
  return (
    <div className={styles.box}>
      <ul className={styles.box_list}>
        {data &&
          data.map((item) => (
            <li className={styles.box_item} key={item.id}>
              {/* <Link href={`/characters/${item.id}`}> */}
              <div className={styles.thumb}>
                <div className={styles.thumb_box}>
                <img
                  className={styles.thumb_img}
                  src={item.image}
                  alt={item.name}
                  width={280}
                  height={300}
                />
                </div>
                {(() => {
                  if (item.status === "Dead") {
                    return (
                      <div
                        className={styles.thumb_status}
                        style={{
                          backgroundColor: "red"
                        }}
                      >
                        {item.status}
                      </div>
                    );
                  } else if (item.status === "Alive") {
                    return (
                      <div
                        className={styles.thumb_status}
                        style={{
                          backgroundColor: "green"
                        }}
                      >
                        {item.status}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className={styles.thumb_status}
                        style={{
                          backgroundColor: "grey"
                        }}
                      >
                        {item.status}
                      </div>
                    );
                  }
                })()}
              </div>
      
              
                <p className={styles.box_text}> <b> {item.name} </b> - {item.gender}</p>
                <p className={styles.box_text}>  <b>Location: </b>{item.location.name} </p>
                <p className={styles.box_text}> <b> Origin:  </b>{item.origin.name}</p>
         
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Card;
