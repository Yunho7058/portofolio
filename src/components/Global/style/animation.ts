import { keyframes } from 'styled-components';

export const changeColor = keyframes`
    0%{
        background: linear-gradient(
            to top,
            rgb(0, 39, 91),
            rgb(1, 31, 57),
            rgb(1, 28, 53)
  );
    }
    30%{
        background: linear-gradient(
            to top,
            rgb(0, 41, 91),
            rgb(1, 35, 60),
            rgb(1, 31, 57)
  );
    }
    60%{
        background: linear-gradient(
            to top,
            rgb(0, 43, 93),
            rgb(1, 36, 62),
            rgb(1, 33, 60)
  );
    }
    100%{
        background: linear-gradient(
            to top,
            rgb(0, 41, 91),
            rgb(1, 35, 60),
            rgb(1, 31, 57)
  );
    }
`;
const off =
  'text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.6);-webkit-text-stroke: 0px white;opacity: 0.1;';
export const flicker = keyframes`
  0% {
  opacity: 0;
}
10% {
  ${off}

}
10.1% {
  opacity: 1;
  text-shadow: none;
}
10.2% {
  ${off}

}
20% {
  ${off}

}
20.1% {
  opacity: 1;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
}
20.6% {
  ${off}

}
30% {
  ${off}

}
30.1% {
  opacity: 1;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
}
30.5% {
  opacity: 1;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
}
30.6% {
  ${off}

}
45% {
  ${off}

}
45.1% {
  opacity: 1;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
}
50% {
  opacity: 1;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
}
55% {
  opacity: 1;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
}
55.1% {
  ${off}

}
57% {
  ${off}

}
57.1% {
  opacity: 1;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
}
60% {
  opacity: 1;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
}
60.1% {
  ${off}

}
65% {
  ${off}

}
65.1% {
  opacity: 1;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
}
75% {
  opacity: 1;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
}
75.1% {
  ${off}

}
77% {
  ${off}

}
77.1% {
  opacity: 1;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
}
85% {
  opacity: 1;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
}
85.1% {
  ${off}

}
86% {
  ${off}

}
86.1% {
  opacity: 1;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
}
100% {
  -webkit-text-stroke: 1px white;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
  0 0 82px #0fa; 
}
`;
