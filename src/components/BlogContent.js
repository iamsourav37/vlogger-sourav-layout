import React from "react";

function BlogContent(props) {
  return (
    <div>
      <h1 className="display-4  text-dark">{props.title}</h1>
      <p
        className="p-3 fs-5"
        style={{
          textAlign: "justify",
        }}
      >
        <span className="text-danger display-3">{props.desc}. </span> | Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Consequatur natus
        eaque molestiae ipsam labore ratione temporibus delectus sit officiis
        nulla vitae libero nam eius, consectetur soluta eligendi sed corrupti?
        Ullam, repudiandae minus veniam cupiditate odio necessitatibus
        praesentium quae eveniet fugiat ut voluptatibus? Accusamus, perferendis
        quisquam veritatis eveniet, tempora odio nostrum vitae quasi, doloremque
        accusantium dolorum perspiciatis quos corporis nesciunt aperiam eaque
        laudantium deserunt eum aut? Illo iste cumque, atque quas modi autem aut
        doloremque veniam exercitationem asperiores voluptate eius provident
        repudiandae perferendis alias natus amet laboriosam! Unde et tenetur
        molestias hic laborum quidem velit, consequuntur ab ullam adipisci
        dolorem vel error fugiat aliquid quisquam enim consequatur obcaecati.
        Quisquam dicta iusto odit aspernatur, quidem ut facere accusantium nihil
        mollitia et dolor officia soluta id pariatur harum optio veniam quaerat
        ab rem a! Doloribus omnis maiores vel rem, magnam nostrum aut
        praesentium delectus porro, corporis possimus. Ad sapiente ut porro
        provident ullam repellat rerum necessitatibus sit error ipsam quas, eius
        repellendus asperiores itaque suscipit fugit totam. Laborum culpa quos
        ipsa eos autem rerum itaque tenetur consequatur eveniet. Ullam dicta,
        aspernatur qui velit minima quo corporis quas atque esse veniam amet
        reprehenderit a alias quisquam quod harum consequuntur iusto et
        voluptatum nihil similique.
      </p>
    </div>
  );
}

export default BlogContent;
