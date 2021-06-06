import Link from "next/link";

function Button(props) {
  return <Link>{props.children}</Link>
}

export default Button;