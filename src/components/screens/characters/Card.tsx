import React from "react";
import { NextPage } from "next";
import styles from "./Characters.module.scss";
import { FC } from "react";

type Prop = {
  data: any;
};

const Card = ({ data }: Prop) => {
  return (
    <div className={styles.box}>
      <ul className={styles.box_list}>
        {data.results.map((item: any) => (
          <li className={styles.box_item} key={item.id}>
            <div className={styles.thumb}>
              <img src={item.image} alt={item.name} width={280} height={300} />
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

            <b>
              <p className={styles.box_text}> {item.name} </p>
            </b>
            <p className={styles.box_text}> {item.gender} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
