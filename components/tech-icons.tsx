import React from "react";

interface IconProps {
  className?: string;
}

// 1. React
export function ReactIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="-11.5 -10.23174 23 20.46348"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>React</title>
      <circle cx="0" cy="0" r="2.05" fill="#087EA4" />
      <g stroke="#087EA4" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

// 2. Next.js
export function NextjsIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 180 180"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Next.js</title>
      <circle cx="90" cy="90" r="90" fill="#0f172a" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="url(#paint0_linear_next_tech)"
      />
      <rect
        fill="url(#paint1_linear_next_tech)"
        height="72"
        width="12"
        x="115"
        y="54"
      />
      <defs>
        <linearGradient
          id="paint0_linear_next_tech"
          x1="109"
          x2="144.5"
          y1="116.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_next_tech"
          x1="121"
          x2="120.799"
          y1="54"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 3. JavaScript
export function JavascriptIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>JavaScript</title>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M6.8 17.5c.5.8 1.2 1.3 2.1 1.3 1.1 0 1.9-.6 1.9-2.1v-6.2h2v6.2c0 2.4-1.5 3.3-3.9 3.3-1.8 0-3-.8-3.6-2l1.5-.5zm9.1.5c.7.4 1.5.7 2.4.7 1 0 1.6-.4 1.6-1 0-.7-.5-.9-1.8-1.4-1.7-.7-2.6-1.5-2.6-2.8 0-1.6 1.3-2.8 3.3-2.8 1.2 0 2.2.4 2.8.8l-.6 1.6c-.6-.4-1.3-.6-2.2-.6-.9 0-1.4.4-1.4.9 0 .6.5.9 1.7 1.3 1.8.7 2.7 1.5 2.7 2.9 0 1.7-1.4 2.9-3.6 2.9-1.4 0-2.5-.4-3.3-1l.7-1.5z"
        fill="#000000"
      />
    </svg>
  );
}

// 4. TypeScript
export function TypescriptIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>TypeScript</title>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M5.5 8h6v2.2h-2v7.8h-2v-7.8h-2V8zm8.6 7.6c.7.4 1.6.7 2.5.7 1 0 1.6-.4 1.6-1 0-.6-.5-.9-1.7-1.4-1.6-.6-2.5-1.4-2.5-2.7 0-1.6 1.3-2.7 3.3-2.7 1.2 0 2.2.3 2.7.7l-.6 1.7c-.5-.3-1.2-.5-2.1-.5-.9 0-1.4.4-1.4.9 0 .6.5.8 1.7 1.3 1.8.7 2.6 1.5 2.6 2.8 0 1.7-1.4 2.8-3.5 2.8-1.3 0-2.4-.4-3.2-1l.6-1.6z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 5. Tailwind CSS
export function TailwindIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="#38BDF8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Tailwind CSS</title>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.093 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.909 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.093 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.909 12 6.001 12z" />
    </svg>
  );
}

// 6. Redux Toolkit
export function ReduxIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="#764ABC"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Redux Toolkit</title>
      <path d="M16.035 3.015a4.77 4.77 0 0 0-2.88 1.023 4.8 4.8 0 0 0-3.31-1.023c-2.27.18-4.04 1.95-4.22 4.22-.09 1.13.25 2.24.96 3.12-.71.88-1.05 1.99-.96 3.12.18 2.27 1.95 4.04 4.22 4.22a4.8 4.8 0 0 0 3.31-1.023 4.77 4.77 0 0 0 2.88 1.023c2.65 0 4.8-2.15 4.8-4.8 0-1.3-.52-2.48-1.37-3.35.85-.87 1.37-2.05 1.37-3.35 0-2.65-2.15-4.8-4.8-4.8zm-4.035 3.07a2.72 2.72 0 0 1 2.72 2.715c0 .35-.07.68-.19.98a4.79 4.79 0 0 0-2.53-2.505 2.75 2.75 0 0 1 0-1.19zm-3.085 2.715a2.72 2.72 0 0 1 2.72-2.715c0 .41.09.81.25 1.17a4.79 4.79 0 0 0-2.58 2.525 2.73 2.73 0 0 1-.39-.98zm-1.035 4.1c0-.36.07-.7.2-1.01a4.8 4.8 0 0 0 2.56 2.52 2.76 2.76 0 0 1-.37.99 2.72 2.72 0 0 1-2.39-2.5zm4.12 3.085a2.72 2.72 0 0 1-2.72-2.715c0-.41-.09-.81-.25-1.17a4.79 4.79 0 0 0 2.58-2.525 2.73 2.73 0 0 1 .39.98 2.72 2.72 0 0 1 0 5.43zm3.085-2.715a2.72 2.72 0 0 1-2.72 2.715c0-.35.07-.68.19-.98a4.79 4.79 0 0 0 2.53 2.505 2.75 2.75 0 0 1 0 1.19 2.72 2.72 0 0 1 0-5.43zm1.035-4.1c0 .36-.07.7-.2 1.01a4.8 4.8 0 0 0-2.56-2.52 2.76 2.76 0 0 1 .37-.99 2.72 2.72 0 0 1 2.39 2.5z" />
    </svg>
  );
}

// 7. Node.js
export function NodejsIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="#5FA04E"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Node.js</title>
      <path d="M12 10.154c-.13 0-.256.037-.367.102l-1.884 1.092c-.22.13-.363.364-.363.623v2.186c0 .258.143.494.363.62l1.884 1.092c.11.066.237.103.367.103s.256-.037.367-.103l1.884-1.092c.22-.126.363-.362.363-.62v-2.186c0-.259-.143-.493-.363-.623l-1.884-1.092a.728.728 0 0 0-.367-.102zm0-8.154c-.58 0-1.144.154-1.64.444l-7.79 4.498a3.292 3.292 0 0 0-1.64 2.852v8.995c0 1.173.628 2.253 1.64 2.852l7.79 4.498c.496.29 1.06.444 1.64.444s1.144-.154 1.64-.444l7.79-4.498c1.012-.599 1.64-1.679 1.64-2.852v-8.995c0-1.173-.628-2.253-1.64-2.852l-7.79-4.498a3.292 3.292 0 0 0-1.64-.444z" />
    </svg>
  );
}

// 8. Express.js
export function ExpressIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Express.js</title>
      <rect width="24" height="24" rx="6" fill="#0f172a" />
      <text
        x="12"
        y="15.5"
        fill="#FFFFFF"
        fontSize="10"
        fontWeight="bold"
        fontFamily="ui-monospace, monospace"
        textAnchor="middle"
        letterSpacing="0.05em"
      >
        ex
      </text>
    </svg>
  );
}

// 9. REST APIs
export function RestApiIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>REST APIs</title>
      <rect
        x="2.5"
        y="3.5"
        width="19"
        height="17"
        rx="4"
        fill="#F0F9FF"
        stroke="#0284C7"
        strokeWidth="1.5"
      />
      <path
        d="M6.5 8h4.5M6.5 12h11M6.5 16h7.5"
        stroke="#0284C7"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="17.5" cy="8" r="1.5" fill="#0284C7" />
    </svg>
  );
}

// 10. React Native CLI
export function ReactNativeIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>React Native CLI</title>
      <rect
        x="4.5"
        y="2"
        width="15"
        height="20"
        rx="3"
        stroke="#0284C7"
        strokeWidth="1.5"
        fill="#F8FAFC"
      />
      <circle cx="12" cy="18.5" r="1" fill="#0284C7" />
      <g transform="translate(12, 9.5) scale(0.44)">
        <circle cx="0" cy="0" r="2.2" fill="#087EA4" />
        <ellipse rx="10" ry="3.8" stroke="#087EA4" strokeWidth="1.4" fill="none" />
        <ellipse
          rx="10"
          ry="3.8"
          stroke="#087EA4"
          strokeWidth="1.4"
          fill="none"
          transform="rotate(60)"
        />
        <ellipse
          rx="10"
          ry="3.8"
          stroke="#087EA4"
          strokeWidth="1.4"
          fill="none"
          transform="rotate(120)"
        />
      </g>
    </svg>
  );
}

// 11. MySQL
export function MysqlIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>MySQL</title>
      <rect width="24" height="24" rx="4" fill="#F0F9FF" />
      <path
        d="M20.5 12.2c-.1-.4-.3-.7-.5-1-.3-.4-.8-.6-1.3-.7-.3 0-.6 0-.9.1-.4.2-.8.5-1.1.9-.3.4-.4.9-.4 1.4 0 .5.2 1 .5 1.3.3.4.8.6 1.3.6.2 0 .4 0 .7 0 .4-.1.8-.4 1.1-.8.3-.4.4-.9.4-1.4 0-.2-.1-.4-.2-.5z"
        fill="#00758F"
      />
      <path
        d="M12.5 5.5c-4 0-7.2 3.2-7.2 7.2 0 1.8.7 3.4 1.8 4.7l1.1-1.1A5.6 5.6 0 0 1 6.9 12.7c0-3.1 2.5-5.6 5.6-5.6 1.5 0 2.9.6 4 1.6l1.1-1.1A7.2 7.2 0 0 0 12.5 5.5z"
        fill="#F29111"
      />
      <path
        d="M17.4 12.7c0 1.5-.6 2.9-1.6 4l-1.1-1.1a4 4 0 0 0 1.2-2.8c0-2.2-1.8-4-4-4-1.1 0-2.1.4-2.8 1.2l-1.1-1.1a5.6 5.6 0 0 1 4-1.6c3.1 0 5.4 2.4 5.4 5.4z"
        fill="#00758F"
      />
    </svg>
  );
}

// 12. Supabase
export function SupabaseIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Supabase</title>
      <path
        d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.234L.379 13.784a.396.396 0 0 0 .307.632H10v8.958a.396.396 0 0 0 .716.234l10.905-13.622a.396.396 0 0 0-.259-.632z"
        fill="#3ECF8E"
      />
    </svg>
  );
}

// 13. Sequelize
export function SequelizeIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="#52B0E7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Sequelize</title>
      <path d="M2.518 13.914l4.24-2.52.022.036c.64 1.053 1.83 1.815 3.237 1.94l-1.077 4.887c-2.73-.55-5.01-2.22-6.422-4.343zm5.72-9.67l2.84 4.093c-1.393.38-2.502 1.362-3.02 2.63L3.714 8.784c1.07-2.07 2.766-3.722 4.524-4.54zm7.848.083c2.02.937 3.652 2.6 4.604 4.664l-4.417 2.19c-.48-1.285-1.554-2.302-2.92-2.716l2.733-4.138zm3.992 11.835c-1.44 2.062-3.702 3.666-6.38 4.148l-1.05-4.887c1.39-.16 2.55-.946 3.16-2.012l.02.035 4.25 2.716zM12 7.7a4.3 4.3 0 1 0 0 8.6 4.3 4.3 0 0 0 0-8.6z" />
    </svg>
  );
}

// 14. Git
export function GitIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="#F05032"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Git</title>
      <path d="M23.546 10.93L13.067.452a1.493 1.493 0 0 0-2.112 0l-2.1 2.1 2.663 2.662a1.77 1.77 0 0 1 2.247 2.257l2.56 2.56a1.767 1.767 0 1 1-.95 1.026l-2.383-2.383v5.42a1.77 1.77 0 1 1-1.424 0V8.75a1.766 1.766 0 0 1-.96-2.333L8.033 3.754.453 11.334a1.494 1.494 0 0 0 0 2.112l10.48 10.48a1.494 1.494 0 0 0 2.112 0l10.5-10.483a1.494 1.494 0 0 0 0-2.113z" />
    </svg>
  );
}

// 15. GitHub
export function GithubTechIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="#181717"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

// 16. Vercel
export function VercelIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="#0f172a"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Vercel</title>
      <path d="M12 1.608L24 22.392H0L12 1.608Z" />
    </svg>
  );
}

// Dynamic Icon Dispatcher
export function TechIcon({
  name,
  className = "w-6 h-6",
}: {
  name: string;
  className?: string;
}) {
  switch (name.toLowerCase().trim()) {
    case "react":
      return <ReactIcon className={className} />;
    case "next.js":
    case "nextjs":
      return <NextjsIcon className={className} />;
    case "javascript":
    case "js":
      return <JavascriptIcon className={className} />;
    case "typescript":
    case "ts":
      return <TypescriptIcon className={className} />;
    case "tailwind css":
    case "tailwind":
      return <TailwindIcon className={className} />;
    case "redux toolkit":
    case "redux":
      return <ReduxIcon className={className} />;
    case "node.js":
    case "nodejs":
      return <NodejsIcon className={className} />;
    case "express.js":
    case "express":
      return <ExpressIcon className={className} />;
    case "rest apis":
    case "rest api":
    case "rest":
      return <RestApiIcon className={className} />;
    case "react native cli":
    case "react native":
      return <ReactNativeIcon className={className} />;
    case "mysql":
      return <MysqlIcon className={className} />;
    case "supabase":
      return <SupabaseIcon className={className} />;
    case "sequelize":
      return <SequelizeIcon className={className} />;
    case "git":
      return <GitIcon className={className} />;
    case "github":
      return <GithubTechIcon className={className} />;
    case "vercel":
      return <VercelIcon className={className} />;
    default:
      return (
        <div className={`rounded bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-700 ${className}`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}
