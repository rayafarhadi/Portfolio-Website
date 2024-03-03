import React from "react";
import Link from "next/link";

const techIconMap = [
  {
    name: "NextJS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0,0,256,256"
      >
        <g fill="#ffffff">
          <g transform="scale(5.33333,5.33333)">
            <path d="M18.974,31.5c0,0.828 -0.671,1.5 -1.5,1.5c-0.829,0 -1.5,-0.672 -1.5,-1.5v-14c0,-0.653 0.423,-1.231 1.045,-1.43c0.625,-0.198 1.302,0.03 1.679,0.563l16.777,23.704c5.142,-3.628 8.525,-9.602 8.525,-16.337c0,-11 -9,-20 -20,-20c-11,0 -20,9 -20,20c0,11 9,20 20,20c3.192,0 6.206,-0.777 8.89,-2.122l-13.916,-19.662zM28.974,16.5c0,-0.828 0.671,-1.5 1.5,-1.5c0.829,0 1.5,0.672 1.5,1.5v13.84l-3,-4.227z"></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "TailwindCSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0,0,256,256"
      >
        <g fill="#ffffff">
          <g transform="scale(10.66667,10.66667)">
            <path d="M23.395,7.081c-0.488,-0.207 -1.053,-0.002 -1.29,0.472c-0.224,0.448 -0.523,0.723 -0.914,0.838c-0.612,0.183 -1.343,-0.052 -1.685,-0.253c-0.451,-0.265 -0.974,-0.667 -1.527,-1.092c-1.765,-1.358 -3.961,-3.046 -6.979,-3.046c-2.414,0 -3.654,1.239 -5.707,3.293c-0.391,0.391 -0.394,1.027 -0.003,1.417c0.38,0.382 0.99,0.394 1.382,0.03c0.01,-0.009 0.02,-0.019 0.03,-0.028c0.552,-0.426 4.03,-0.012 5.55,1.196c2.259,1.795 3.89,3.092 5.748,3.092c2.659,0 4.879,-1.741 5.94,-4.658c0.181,-0.498 -0.058,-1.051 -0.545,-1.261zM18.395,14.081c-0.488,-0.207 -1.053,-0.002 -1.29,0.472c-0.224,0.448 -0.523,0.723 -0.914,0.838c-0.612,0.18 -1.343,-0.052 -1.685,-0.253c-0.451,-0.265 -0.974,-0.667 -1.527,-1.092c-1.765,-1.358 -3.961,-3.046 -6.979,-3.046c-2.414,0 -3.654,1.239 -5.707,3.293c-0.391,0.391 -0.394,1.027 -0.003,1.417c0.38,0.382 0.991,0.395 1.383,0.03c0.01,-0.009 0.02,-0.019 0.03,-0.028c0.551,-0.426 4.031,-0.012 5.55,1.196c2.258,1.795 3.889,3.092 5.747,3.092c2.659,0 4.879,-1.741 5.94,-4.658c0.181,-0.498 -0.058,-1.051 -0.545,-1.261z"></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Wordpress",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0,0,256,256"
      >
        <g fill="#ffffff">
          <g transform="scale(5.12,5.12)">
            <path d="M25,2c-12.683,0 -23,10.318 -23,23c0,12.682 10.317,23 23,23c12.683,0 23,-10.318 23,-23c0,-12.682 -10.317,-23 -23,-23zM25,7c4.26,0 8.166,1.485 11.247,3.955c-0.956,0.636 -1.547,1.74 -1.547,2.945c0,1.6 0.9,3 1.9,4.6c0.8,1.3 1.6,3 1.6,5.4c0,1.7 -0.5,3.8 -1.5,6.4l-2,6.6l-7.1,-21.2c1.2,-0.1 2.3,-0.2 2.3,-0.2c1,-0.1 0.9,-1.6 -0.1,-1.6c0,0 0,0 -0.1,0c0,0 -3.2,0.3 -5.3,0.3c-1.9,0 -5.2,-0.3 -5.2,-0.3c0,0 0,0 -0.1,0c-1,0 -1.1,1.6 -0.1,1.6c0,0 1,0.1 2.1,0.2l3.1,8.4l-4.3,12.9l-7.2,-21.4c1.2,-0.1 2.3,-0.2 2.3,-0.2c1,-0.1 0.9,-1.6 -0.1,-1.6c0,0 0,0 -0.1,0c0,0 -2.152,0.202 -4.085,0.274c3.288,-4.294 8.453,-7.074 14.285,-7.074zM7,25c0,-1.8 0.271,-3.535 0.762,-5.174l7.424,20.256c-4.925,-3.211 -8.186,-8.759 -8.186,-15.082zM19.678,42.2l5.322,-15.6l5.685,15.471c-1.788,0.594 -3.696,0.929 -5.685,0.929c-1.853,0 -3.64,-0.281 -5.322,-0.8zM35.304,39.75v0l5.296,-15.35c0.786,-2 1.21,-3.742 1.39,-5.304c0.643,1.851 1.01,3.832 1.01,5.904c0,6.111 -3.046,11.497 -7.696,14.75z"></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Javascript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0,0,256,256"
      >
        <g fill="#ffffff">
          <g transform="scale(5.12,5.12)">
            <path d="M43.33594,4h-36.66797c-1.47266,0 -2.66797,1.19531 -2.66797,2.66797v36.66406c0,1.47266 1.19531,2.66797 2.66797,2.66797h36.66406c1.47266,0 2.66797,-1.19531 2.66797,-2.66406v-36.66797c0,-1.47266 -1.19531,-2.66797 -2.66406,-2.66797zM27,36.18359c0,3.99609 -2.34375,5.81641 -5.76562,5.81641c-3.09375,0 -5.32422,-2.07422 -6.23437,-4l3.14453,-1.90234c0.60547,1.07422 1.52734,1.90234 2.85547,1.90234c1.26953,0 2,-0.49609 2,-2.42578v-12.57422h4zM35.67578,42c-3.54297,0 -5.55469,-1.78516 -6.67578,-4l3,-2c0.81641,1.33594 1.70703,2.61328 3.58984,2.61328c1.58203,0 2.41016,-0.78906 2.41016,-1.88281c0,-1.30469 -0.85937,-1.76953 -2.59766,-2.53125l-0.95312,-0.41016c-2.75391,-1.17187 -4.58594,-2.64062 -4.58594,-5.75c0,-2.85937 2.18359,-5.03906 5.58984,-5.03906c2.42578,0 4.16797,0.84375 5.42578,3.05469l-2.96875,1.91016c-0.65625,-1.17578 -1.35937,-1.63672 -2.45703,-1.63672c-1.11719,0 -1.82422,0.71094 -1.82422,1.63672c0,1.14453 0.70703,1.60547 2.34375,2.31641l0.95313,0.41016c3.24609,1.38672 5.07422,2.80469 5.07422,5.99219c0,3.43359 -2.69922,5.31641 -6.32422,5.31641z"></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "PHP",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0,0,256,256"
      >
        <g fill="#ffffff">
          <g transform="scale(5.12,5.12)">
            <path d="M25,12c-13.45703,0 -24,5.71094 -24,13c0,7.28906 10.54297,13 24,13c13.45703,0 24,-5.71094 24,-13c0,-7.28906 -10.54297,-13 -24,-13zM22.50781,16h2.62109l-0.83203,4h2.33984c1.48438,0 2.48047,0.20703 3.04688,0.72656c0.55469,0.51172 0.72266,1.35156 0.5,2.49609l-1.03906,4.77734h-2.66406l0.95703,-4.41797c0.11719,-0.60547 0.07031,-1.02734 -0.13281,-1.25c-0.20312,-0.22266 -0.64844,-0.33203 -1.31641,-0.33203h-2.09766l-1.26562,6h-2.625zM11,20h5.33203c2.54297,0 4.08203,1.70313 3.48047,4.24609c-0.69922,2.95313 -2.57422,3.75391 -6.01953,3.75391h-1.64844l-0.52344,3h-2.64844zM32,20h5.33203c2.54297,0 4.08203,1.70313 3.48047,4.24609c-0.69922,2.95313 -2.57422,3.75391 -6.01953,3.75391h-1.64844l-0.52344,3h-2.64844zM13.26953,22l-0.75391,4h1.71094c1.48047,0 2.85547,-0.16797 3.08594,-2.375c0.08594,-0.85547 -0.26953,-1.625 -1.98047,-1.625zM34.26953,22l-0.75391,4h1.71094c1.48047,0 2.85547,-0.16797 3.08594,-2.375c0.08594,-0.85547 -0.26953,-1.625 -1.98047,-1.625z"></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Wix",
    icon: (
      <svg
        className="mt-2"
        width="38"
        height="15"
        viewBox="0 0 173 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M98.7264 1.78638C95.2775 3.61433 94.0358 6.63217 94.0358 14.9787C94.0358 14.9787 95.7776 13.3059 98.3384 12.3661C100.218 11.7194 101.805 10.6847 102.753 9.99491C105.667 7.86518 106.073 5.14912 106.073 0.544765C106.073 0.544765 101.305 0.406799 98.7264 1.78638ZM78.4724 3.76091C75.7133 6.22692 74.8683 10.1329 74.8683 10.1329L65.5733 45.8382L57.908 16.5652C57.1579 13.5042 55.7869 9.59827 53.6399 7.02018C50.967 3.76091 45.5004 3.5626 44.8882 3.5626C44.3019 3.5626 38.7749 3.76092 36.0416 7.07192C33.9205 9.6845 32.5409 13.5473 31.7908 16.6255L24.1255 45.8986L14.934 10.1415C14.934 10.1415 14.1407 6.18381 11.3298 3.76954C6.76858 -0.239876 0 0.605121 0 0.605121L17.6587 67.5494C17.6587 67.5494 23.496 67.9978 26.4104 66.463C30.2129 64.5316 32.0926 63.0054 34.4206 53.8484C36.4986 45.7434 42.2842 21.9111 42.8188 20.178C43.0689 19.333 43.4224 17.3153 44.8968 17.3153C46.4402 17.3153 46.742 19.2898 46.9748 20.178C47.5266 21.8593 53.2605 45.7434 55.3903 53.8484C57.7011 62.945 59.5376 64.4281 63.4005 66.463C66.3148 67.9978 72.1522 67.5494 72.1522 67.5494L89.8109 0.648226C89.7936 0.648226 83.0078 -0.20539 78.4724 3.76091ZM106.073 11.5211C106.073 11.5211 104.96 13.2024 102.451 14.6855C100.83 15.5822 99.2869 16.2203 97.6055 17.0222C94.8205 18.35 94.0358 19.8848 94.0358 22.1525V67.558C94.0358 67.558 98.5367 68.1012 101.399 66.6613C105.159 64.7471 105.995 62.9105 106.064 54.5554L106.073 11.5211ZM150.15 34.2152L172.56 0.803435C172.56 0.803435 163.11 -0.826198 158.411 3.46775C155.393 6.18381 152.047 11.0986 152.047 11.0986L143.839 23.0492C143.382 23.6442 142.942 24.3426 142.114 24.3426C141.261 24.3426 140.726 23.6959 140.373 23.0492L132.078 11.1331C132.078 11.1331 128.758 6.23554 125.697 3.51087C121.041 -0.791707 111.548 0.837922 111.548 0.837922L133.992 34.1635L111.548 67.4287C111.548 67.4287 121.429 68.7134 126.103 64.4108C129.12 61.6948 132.035 57.1939 132.035 57.1939L140.226 45.2691C140.683 44.6828 141.123 44.0016 141.951 44.0016C142.813 44.0016 143.339 44.6483 143.692 45.2691L151.901 57.1939C151.901 57.1939 154.962 61.5913 157.936 64.4108C162.575 68.7134 172.31 67.4287 172.31 67.4287L150.15 34.2152Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "Kotlin",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0,0,256,256"
      >
        <g fill="#ffffff">
          <g transform="scale(5.12,5.12)">
            <path d="M46,46h-40l20,-20zM45,4l-41,41.17v-19.34l21.83,-21.83zM23,4l-19,19v-19z"></path>
          </g>
        </g>
      </svg>
    ),
  },
];

const ProjectCard = ({
  imgUrl,
  title,
  description,
  techUsed,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div>
      <div
        className="h-32 rounded-t-xl"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className="bg-[#181818] rounded-b-xl py-6 px-4 text-white">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-text-secondary mb-2">{description}</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-1">
            {techUsed.map((tech) => (
              <div className="text-white" key={tech.id}>
                {
                  techIconMap.find((techIcon) => techIcon.name === tech.name)
                    ?.icon
                }
              </div>
            ))}
          </div>
          <div className="flex flex-row">
            <Link href={gitUrl} className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0,0,256,256"
              >
                <g fill="#ffffff">
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                  </g>
                </g>
              </svg>
            </Link>
            <Link href={previewUrl}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 173 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M171.814 53.8759C156.232 22.3808 123.743 0.5 86.28 0.5C48.8174 0.5 16.3277 22.3808 0.745937 53.8759C-0.248646 55.8651 -0.248646 58.1858 0.745937 59.8434C16.3277 91.3385 48.8174 113.219 86.28 113.219C123.743 113.219 156.232 91.3385 171.814 59.8434C172.809 57.8542 172.809 55.8651 171.814 53.8759ZM86.28 93.3277C66.0568 93.3277 49.812 77.0828 49.812 56.8597C49.812 36.6365 66.0568 20.3916 86.28 20.3916C106.503 20.3916 122.748 36.6365 122.748 56.8597C122.748 77.0828 106.503 93.3277 86.28 93.3277Z"
                  fill="white"
                />
                <path
                  d="M86.28 33.6527C73.3504 33.6527 63.0731 43.9301 63.0731 56.8597C63.0731 69.7892 73.3504 80.0666 86.28 80.0666C99.2096 80.0666 109.487 69.7892 109.487 56.8597C109.487 43.9301 99.2096 33.6527 86.28 33.6527Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
