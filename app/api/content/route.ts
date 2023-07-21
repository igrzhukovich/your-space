import { NextResponse } from "next/server";

const posts = [
    {
        title: "First Article",
        slug: "first-article",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id metus id felis laoreet rutrum in quis eros.",
    },
    {
        title: "Second Article",
        slug: "second-article",
        content:
            "Pellentesque dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    },
    {
        title: "Third Article",
        slug: "third-article",
        content:
            "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    },
    {
        title: "Fourth Article",
        slug: "fourth-article",
        content:
            "Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    },
    {
        title: "Fifth Article",
        slug: "fifth-article",
        content:
            "Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur.",
    },
    {
        title: "Sixth Article",
        slug: "sixth-article",
        content:
            "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
    },
    {
        title: "Seventh Article",
        slug: "seventh-article",
        content:
            "Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor.",
    },
    {
        title: "Eighth Article",
        slug: "eighth-article",
        content:
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.",
    },
    {
        title: "Ninth Article",
        slug: "ninth-article",
        content:
            "Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod.",
    },
    {
        title: "Tenth Article",
        slug: "tenth-article",
        content:
            "Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue.",
    },
];

export async function GET() {
    return NextResponse.json(posts);
}
