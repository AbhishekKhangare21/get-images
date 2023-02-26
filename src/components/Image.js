import { format } from "date-fns";

export default function Image(props) {
  console.log(props);
  return (
    <>
      <article className="shadow-md bg-white rounded-3xl p-5">
        <img
          src={props.urls.full}
          alt={props.user.name}
          loading="lazy"
          className="h-52 w-full object-cover rounded-3xl md:h-80"
        />
        <div className="pt-5">
          <img
            src={props.user.profile_image.large}
            alt={props.user.name}
            loading="lazy"
            className="w-20 rounded-full shadow "
          />
          <ul>
            <li> {props.user.name} </li>
            <li> {format(new Date(props.created_at), "dd MMM yyyy")} </li>
          </ul>
        </div>
        <div>
          <ul className="text-slate-600 text-sm text-right">
            <li>
              <a
                className="cursor-pointer"
                href={props.user.portfolio_url}
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>{props.likes} Likes</li>
          </ul>
        </div>
      </article>
    </>
  );
}
