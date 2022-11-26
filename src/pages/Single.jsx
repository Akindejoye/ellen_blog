import { Link } from "react-router-dom";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/14504613/pexels-photo-14504613.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/8214192/pexels-photo-8214192.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="Edit" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
          error?
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
          praesentium ipsum nostrum inventore suscipit dignissimos cupiditate
          commodi dolore? Odio nobis rerum atque nisi, cum maiores qui dolorum.
          Natus, quia eius consectetur corporis nesciunt officia sapiente
          aliquid nam quo! Quos quibusdam quas ipsa beatae laudantium eos alias
          dolor mollitia rem, minima modi quasi quaerat reprehenderit recusandae
          facere? Voluptas enim eos incidunt cum voluptatum! Ea dolor doloribus
          incidunt! Atque itaque in corporis natus inventore reiciendis ratione
          suscipit similique? Placeat rerum nemo earum, quasi blanditiis
          corrupti laboriosam iusto necessitatibus alias ad aliquam eaque
          officia hic tempore maiores, illo natus saepe dolorum ut? Quas quos,
          dicta fugiat natus impedit eaque doloremque nihil temporibus assumenda
          quae earum, tempore ipsum quidem maiores. Harum reiciendis
          perspiciatis ratione adipisci ab, eaque illo magni itaque, dolores
          numquam eos, quos accusamus. Quidem atque voluptates totam sit soluta
          quos, omnis itaque vero animi error ad dignissimos? Placeat pariatur
          fuga reiciendis, quas eos autem eveniet officia repellendus corporis
          ex ipsum quaerat nihil adipisci odit! Provident natus incidunt rem
          deleniti eum beatae consequuntur vero numquam voluptate porro ipsam
          inventore cupiditate voluptates, similique, error dignissimos. Aut
          tempore magni soluta officiis veniam minima tenetur, nostrum illo
          quia, labore magnam odio dignissimos. Alias molestias pariatur porro?
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
