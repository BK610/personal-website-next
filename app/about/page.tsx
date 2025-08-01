import BaseLayout from "@/components/BaseLayout";
import SocialLink from "@/components/SocialLink";
import Link from "next/link";

export default function Page(): React.ReactElement {
  return (
    <BaseLayout titleText={"About"}>
      <div className="max-w-2xl mx-auto">
        <h1>About</h1>
        <div className="col-span-2 sm:col-span-1 max-w-none prose prose-stone dark:prose-invert leading-relaxed">
          <p>
            Hello, hello! Welcome to the home of my many interests, half-baked
            projects, and digital representations of myself. I hope you enjoy
            it.
          </p>
          <p>
            I am here on this weird, green planet to have fun, learn, teach,
            create, and love.
          </p>
          <p>Highlights from the last few years:</p>
          <ul>
            <li>
              Founding{" "}
              <a href="https://generatenu.com/" target="_blank">
                a product development studio
              </a>{" "}
              during college with some of my best friends.
            </li>
            <li>Teaching myself to ride a bike at the ripe age of 21.</li>
            <li>
              Moving from the US to Singapore on a whim in the Fall of 2019,
              building a life there after COVID hit, and realizing that{" "}
              <Link href="/recipes">food is pretty cool</Link>.
            </li>
            <li>
              Hiking a section of the Appalachian Trail on a week's notice and
              with no training, with the help of one brave, offroad-friendly
              taxi driver (
              <a
                href="https://connect.clickandpledge.com/w/Form/980c7253-487d-45d4-a9d0-fd149fb53720?637680013319366350"
                target="_blank"
              >
                donate to the AT!
              </a>
              ).
            </li>
            <li>
              Discovering the art and science of terrariums, hosting a workshop
              to tell all my friends about it, and building{" "}
              <a href="https://terrarium-resources.webflow.io/" target="_blank">
                a terrarium resource directory
              </a>{" "}
              so others can have the same fun I did.
            </li>
          </ul>
          <p>
            <a href="https://www.linkedin.com/in/baileykane/" target="_blank">
              My professional life
            </a>{" "}
            has followed a similar pattern. I'm excited by solving interesting
            problems with fun people. I've jumped industries and roles in nearly
            every job I've had, and have embraced my nature as an enthusiastic
            generalist.
          </p>
          <p>I now spend my time:</p>
          <ul>
            <li>
              Supporting small business owners by upgrading their businesses
              with technology and processes.
            </li>
            <li>
              Fulfilling my lifelong dreams of being a teacher, teaching STEM
              topics, music, and anything that I get excited to run a workshop
              for.
            </li>
            <li>
              Working on projects that I'm excited by in climate, education,
              music, and the arts.
            </li>
          </ul>
          <p>
            If you want to say hi, work together, or give me advice on how to
            organize my life,{" "}
            <a href="mailto:bailey.orion.kane@gmail.com">please reach out</a>.
            I'd love to hear from you.
          </p>
        </div>
        <hr className="mt-4 pt-4 border-stone-400 dark:border-stone-500" />
        <div className="flex gap-2 items-center">
          <SocialLink
            href="mailto:bailey.orion.kane@gmail.com"
            icon="/img/emailIcon.png"
          >
            Email
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/baileykane/">
            LinkedIn{" "}
          </SocialLink>
          <SocialLink
            href="https://bsky.app/profile/baileykane.co"
            icon="/img/bluesky_favicon.png"
          >
            Bluesky
          </SocialLink>
        </div>
      </div>
    </BaseLayout>
  );
}
