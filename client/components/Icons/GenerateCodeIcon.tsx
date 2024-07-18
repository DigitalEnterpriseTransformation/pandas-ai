import React from "react";

const GenerateCodeIcon = ({ color = "black" }: { color?: string }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 10 8"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <mask id="path-1-inside-1_1298_1664" fill={color}>
        <path d="M6.1168 0.0130738C6.21523 0.0382258 6.29918 0.0997306 6.3502 0.184062C6.40121 0.268394 6.41511 0.368647 6.38883 0.462775L4.35348 7.72756C4.32706 7.82176 4.26258 7.90205 4.17424 7.95079C4.0859 7.99953 3.98093 8.01271 3.88243 7.98744C3.78392 7.96217 3.69995 7.90052 3.64898 7.81604C3.59802 7.73157 3.58423 7.6312 3.61066 7.537L5.64652 0.272215C5.65959 0.225603 5.68214 0.18191 5.71288 0.143633C5.74362 0.105356 5.78195 0.0732454 5.82567 0.049135C5.86939 0.0250246 5.91765 0.00938699 5.96769 0.00311545C6.01773 -0.0031561 6.06857 6.13563e-05 6.11732 0.012584M7.27613 1.50816C7.34427 1.43574 7.43971 1.39217 7.54145 1.38703C7.64318 1.38188 7.74289 1.41559 7.81865 1.48073L8.7085 2.24689C9.08607 2.57118 9.39857 2.84061 9.61373 3.08456C9.83914 3.34175 10 3.61755 10 3.9585C10 4.29896 9.83965 4.57475 9.61373 4.83145C9.39857 5.07589 9.08607 5.34532 8.7085 5.66961L7.81865 6.43577C7.7429 6.50099 7.64316 6.53477 7.54137 6.52967C7.43958 6.52457 7.34408 6.48102 7.27587 6.40859C7.20766 6.33615 7.17234 6.24078 7.17767 6.14345C7.18301 6.04611 7.22856 5.95479 7.3043 5.88957L8.17367 5.14153C8.57736 4.79422 8.84939 4.55859 9.02561 4.35872C9.19467 4.1662 9.23156 4.05402 9.23156 3.95801C9.23156 3.86248 9.19467 3.7503 9.02561 3.55778C8.84939 3.35742 8.57736 3.1218 8.17367 2.77497L7.3043 2.02693C7.26673 1.99466 7.23618 1.95562 7.2144 1.91205C7.19262 1.86847 7.18003 1.82122 7.17737 1.77299C7.17471 1.72476 7.18201 1.6765 7.19887 1.63098C7.21573 1.58545 7.24181 1.54355 7.27561 1.50767M2.6957 2.02693C2.77144 1.96171 2.81699 1.87039 2.82233 1.77306C2.82766 1.67572 2.79234 1.58035 2.72413 1.50792C2.65592 1.43548 2.56042 1.39193 2.45863 1.38683C2.35684 1.38173 2.2571 1.41551 2.18135 1.48073L1.2915 2.24689C0.913934 2.57118 0.601434 2.84061 0.38627 3.08456C0.160861 3.34175 0 3.61755 0 3.9585C0 4.29896 0.160348 4.57475 0.38627 4.83145C0.601434 5.07589 0.913934 5.34532 1.2915 5.66961L2.18135 6.43577C2.2571 6.50099 2.35684 6.53477 2.45863 6.52967C2.56042 6.52457 2.65592 6.48102 2.72413 6.40859C2.79234 6.33615 2.82766 6.24078 2.82233 6.14345C2.81699 6.04611 2.77144 5.95479 2.6957 5.88957L1.82633 5.14153C1.42264 4.79422 1.15061 4.55859 0.974385 4.35872C0.805328 4.1662 0.768443 4.05402 0.768443 3.95801C0.768443 3.86248 0.805328 3.7503 0.974385 3.55778C1.15061 3.35742 1.42264 3.1218 1.82633 2.77497L2.6957 2.02693Z" />
      </mask>
      <path
        d="M6.1168 0.0130738C6.21523 0.0382258 6.29918 0.0997306 6.3502 0.184062C6.40121 0.268394 6.41511 0.368647 6.38883 0.462775L4.35348 7.72756C4.32706 7.82176 4.26258 7.90205 4.17424 7.95079C4.0859 7.99953 3.98093 8.01271 3.88243 7.98744C3.78392 7.96217 3.69995 7.90052 3.64898 7.81604C3.59802 7.73157 3.58423 7.6312 3.61066 7.537L5.64652 0.272215C5.65959 0.225603 5.68214 0.18191 5.71288 0.143633C5.74362 0.105356 5.78195 0.0732454 5.82567 0.049135C5.86939 0.0250246 5.91765 0.00938699 5.96769 0.00311545C6.01773 -0.0031561 6.06857 6.13563e-05 6.11732 0.012584M7.27613 1.50816C7.34427 1.43574 7.43971 1.39217 7.54145 1.38703C7.64318 1.38188 7.74289 1.41559 7.81865 1.48073L8.7085 2.24689C9.08607 2.57118 9.39857 2.84061 9.61373 3.08456C9.83914 3.34175 10 3.61755 10 3.9585C10 4.29896 9.83965 4.57475 9.61373 4.83145C9.39857 5.07589 9.08607 5.34532 8.7085 5.66961L7.81865 6.43577C7.7429 6.50099 7.64316 6.53477 7.54137 6.52967C7.43958 6.52457 7.34408 6.48102 7.27587 6.40859C7.20766 6.33615 7.17234 6.24078 7.17767 6.14345C7.18301 6.04611 7.22856 5.95479 7.3043 5.88957L8.17367 5.14153C8.57736 4.79422 8.84939 4.55859 9.02561 4.35872C9.19467 4.1662 9.23156 4.05402 9.23156 3.95801C9.23156 3.86248 9.19467 3.7503 9.02561 3.55778C8.84939 3.35742 8.57736 3.1218 8.17367 2.77497L7.3043 2.02693C7.26673 1.99466 7.23618 1.95562 7.2144 1.91205C7.19262 1.86847 7.18003 1.82122 7.17737 1.77299C7.17471 1.72476 7.18201 1.6765 7.19887 1.63098C7.21573 1.58545 7.24181 1.54355 7.27561 1.50767M2.6957 2.02693C2.77144 1.96171 2.81699 1.87039 2.82233 1.77306C2.82766 1.67572 2.79234 1.58035 2.72413 1.50792C2.65592 1.43548 2.56042 1.39193 2.45863 1.38683C2.35684 1.38173 2.2571 1.41551 2.18135 1.48073L1.2915 2.24689C0.913934 2.57118 0.601434 2.84061 0.38627 3.08456C0.160861 3.34175 0 3.61755 0 3.9585C0 4.29896 0.160348 4.57475 0.38627 4.83145C0.601434 5.07589 0.913934 5.34532 1.2915 5.66961L2.18135 6.43577C2.2571 6.50099 2.35684 6.53477 2.45863 6.52967C2.56042 6.52457 2.65592 6.48102 2.72413 6.40859C2.79234 6.33615 2.82766 6.24078 2.82233 6.14345C2.81699 6.04611 2.77144 5.95479 2.6957 5.88957L1.82633 5.14153C1.42264 4.79422 1.15061 4.55859 0.974385 4.35872C0.805328 4.1662 0.768443 4.05402 0.768443 3.95801C0.768443 3.86248 0.805328 3.7503 0.974385 3.55778C1.15061 3.35742 1.42264 3.1218 1.82633 2.77497L2.6957 2.02693Z"
        fill={color}
      />
      <path
        d="M6.38883 0.462775L6.87029 0.597665L6.87042 0.59721L6.38883 0.462775ZM4.35348 7.72756L4.8349 7.86263L4.83494 7.86245L4.35348 7.72756ZM3.61066 7.537L4.09207 7.67207L4.09211 7.67192L3.61066 7.537ZM5.64652 0.272215L5.1651 0.137168L5.16506 0.137295L5.64652 0.272215ZM7.81865 1.48073L8.14488 1.10182L8.14464 1.10161L7.81865 1.48073ZM8.7085 2.24689L8.38227 2.62579L8.38272 2.62618L8.7085 2.24689ZM9.61373 3.08456L9.98975 2.755L9.98872 2.75383L9.61373 3.08456ZM9.61373 4.83145L9.98905 5.1618L9.98906 5.16179L9.61373 4.83145ZM8.7085 5.66961L8.38272 5.29032L8.38227 5.29071L8.7085 5.66961ZM7.81865 6.43577L7.49241 6.05687L7.4924 6.05687L7.81865 6.43577ZM7.3043 5.88957L6.97819 5.51056L6.97806 5.51067L7.3043 5.88957ZM8.17367 5.14153L7.84757 4.76251L7.84755 4.76252L8.17367 5.14153ZM9.02561 4.35872L9.40065 4.6894L9.40132 4.68864L9.02561 4.35872ZM9.02561 3.55778L9.40132 3.22786L9.40105 3.22756L9.02561 3.55778ZM8.17367 2.77497L7.84755 3.15398L7.84783 3.15422L8.17367 2.77497ZM7.3043 2.02693L7.63042 1.64792L7.63009 1.64764L7.3043 2.02693ZM2.6957 2.02693L3.02181 2.40594L3.02194 2.40583L2.6957 2.02693ZM2.18135 1.48073L2.50759 1.85963L2.5076 1.85963L2.18135 1.48073ZM1.2915 2.24689L1.61728 2.62618L1.61773 2.62579L1.2915 2.24689ZM0.38627 3.08456L0.0112802 2.75383L0.0102542 2.755L0.38627 3.08456ZM0.38627 4.83145L0.0109375 5.16179L0.0109531 5.1618L0.38627 4.83145ZM1.2915 5.66961L1.61773 5.29071L1.61728 5.29032L1.2915 5.66961ZM2.18135 6.43577L2.5076 6.05687L2.50759 6.05687L2.18135 6.43577ZM2.6957 5.88957L3.02194 5.51067L3.02181 5.51056L2.6957 5.88957ZM1.82633 5.14153L2.15245 4.76252L2.15243 4.76251L1.82633 5.14153ZM0.974385 4.35872L0.59868 4.68864L0.599351 4.6894L0.974385 4.35872ZM0.974385 3.55778L0.59895 3.22756L0.598681 3.22786L0.974385 3.55778ZM1.82633 2.77497L2.15217 3.15422L2.15245 3.15398L1.82633 2.77497ZM5.99301 0.497508C5.9688 0.491319 5.94151 0.47447 5.92238 0.442853L6.77802 -0.0747281C6.65686 -0.275009 6.46167 -0.414868 6.24059 -0.47136L5.99301 0.497508ZM5.92238 0.442853C5.90268 0.410285 5.89607 0.368375 5.90724 0.32834L6.87042 0.59721C6.93415 0.368919 6.89974 0.126503 6.77802 -0.0747281L5.92238 0.442853ZM5.90737 0.327886L3.87202 7.59267L4.83494 7.86245L6.87029 0.597664L5.90737 0.327886ZM3.87207 7.5925C3.88308 7.55327 3.90789 7.52669 3.93271 7.513L4.41577 8.38859C4.61728 8.27741 4.77104 8.09024 4.8349 7.86263L3.87207 7.5925ZM3.93271 7.513C3.9569 7.49965 3.98287 7.49702 4.00667 7.50312L3.75818 8.47176C3.97899 8.5284 4.2149 8.4994 4.41577 8.38859L3.93271 7.513ZM4.00667 7.50312C4.03081 7.50932 4.05804 7.52615 4.07709 7.55774L3.22087 8.07435C3.34187 8.27488 3.53703 8.41502 3.75818 8.47176L4.00667 7.50312ZM4.07709 7.55774C4.09673 7.59028 4.10327 7.63213 4.09207 7.67207L3.12924 7.40194C3.06519 7.63026 3.0993 7.87286 3.22087 8.07435L4.07709 7.55774ZM4.09211 7.67192L6.12797 0.407136L5.16506 0.137295L3.1292 7.40208L4.09211 7.67192ZM6.12793 0.407263C6.12254 0.426491 6.1136 0.443184 6.10273 0.456711L5.32303 -0.169445C5.25069 -0.079364 5.19665 0.0247141 5.1651 0.137168L6.12793 0.407263ZM6.10273 0.456711C6.09191 0.470183 6.07953 0.480125 6.06712 0.486971L5.58421 -0.388701C5.48436 -0.333634 5.39533 -0.259471 5.32303 -0.169445L6.10273 0.456711ZM6.06712 0.486971C6.05474 0.493796 6.04208 0.497703 6.02987 0.499234L5.90551 -0.493004C5.79321 -0.478929 5.68403 -0.443747 5.58421 -0.388701L6.06712 0.486971ZM6.02987 0.499234C6.01766 0.500765 6.00519 0.500015 5.9929 0.496856L6.24173 -0.471689C6.13196 -0.499892 6.01781 -0.507077 5.90551 -0.493004L6.02987 0.499234ZM7.64025 1.85082C7.61754 1.87496 7.59041 1.88519 7.5667 1.88639L7.5162 0.887666C7.28901 0.899154 7.07101 0.996532 6.912 1.1655L7.64025 1.85082ZM7.5667 1.88639C7.54305 1.88759 7.51631 1.88018 7.49265 1.85984L8.14464 1.10161C7.96948 0.950991 7.74331 0.876182 7.5162 0.887666L7.5667 1.88639ZM7.49241 1.85963L8.38227 2.62579L9.03474 1.86798L8.14488 1.10182L7.49241 1.85963ZM8.38272 2.62618C8.76969 2.95856 9.05159 3.20311 9.23874 3.4153L9.98872 2.75383C9.74554 2.47811 9.40244 2.1838 9.03429 1.86759L8.38272 2.62618ZM9.23771 3.41413C9.42719 3.63031 9.5 3.79207 9.5 3.9585H10.5C10.5 3.44302 10.2511 3.05319 9.98975 2.755L9.23771 3.41413ZM9.5 3.9585C9.5 4.12462 9.42745 4.2863 9.2384 4.5011L9.98906 5.16179C10.2519 4.86321 10.5 4.47329 10.5 3.9585H9.5ZM9.23841 4.50109C9.05143 4.71351 8.76975 4.95789 8.38272 5.29032L9.03429 6.04891C9.40238 5.73275 9.7457 5.43827 9.98905 5.1618L9.23841 4.50109ZM8.38227 5.29071L7.49241 6.05687L8.14488 6.81468L9.03474 6.04852L8.38227 5.29071ZM7.4924 6.05687C7.51604 6.03652 7.54276 6.02911 7.56638 6.0303L7.51636 7.02905C7.74356 7.04043 7.96976 6.96546 8.14489 6.81467L7.4924 6.05687ZM7.56638 6.0303C7.59007 6.03148 7.61718 6.0417 7.63988 6.06581L6.91186 6.75136C7.07098 6.92034 7.28909 7.01766 7.51636 7.02905L7.56638 6.0303ZM7.63988 6.06581C7.66333 6.09071 7.67925 6.12829 7.67693 6.1708L6.67842 6.1161C6.66543 6.35327 6.75199 6.58159 6.91186 6.75136L7.63988 6.06581ZM7.67693 6.1708C7.67461 6.21314 7.65494 6.24746 7.63055 6.26847L6.97806 5.51067C6.80217 5.66212 6.69141 5.87908 6.67842 6.1161L7.67693 6.1708ZM7.63042 6.26858L8.49978 5.52055L7.84755 4.76252L6.97819 5.51056L7.63042 6.26858ZM8.49977 5.52056C8.89217 5.18295 9.19614 4.92134 9.40065 4.6894L8.65058 4.02804C8.50263 4.19583 8.26254 4.40548 7.84757 4.76251L8.49977 5.52056ZM9.40132 4.68864C9.60787 4.45343 9.73156 4.22737 9.73156 3.95801H8.73156C8.73156 3.94868 8.73259 3.93652 8.73542 3.92398C8.73813 3.91195 8.741 3.90625 8.74007 3.90822C8.73665 3.91544 8.71696 3.95245 8.64991 4.0288L9.40132 4.68864ZM9.73156 3.95801C9.73156 3.68893 9.60765 3.46283 9.40132 3.22786L8.64991 3.8877C8.71695 3.96404 8.7367 4.00111 8.74015 4.00839C8.7411 4.01039 8.73822 4.00468 8.73548 3.99258C8.73262 3.97996 8.73156 3.96762 8.73156 3.95801H9.73156ZM9.40105 3.22756C9.19624 2.99471 8.89202 2.73295 8.4995 2.39571L7.84783 3.15422C8.26269 3.51064 8.50253 3.72014 8.65018 3.88801L9.40105 3.22756ZM8.49978 2.39596L7.63042 1.64792L6.97819 2.40594L7.84755 3.15398L8.49978 2.39596ZM7.63009 1.64764C7.64209 1.65794 7.65318 1.67158 7.66164 1.68849L6.76716 2.1356C6.81917 2.23966 6.89137 2.33138 6.97852 2.40623L7.63009 1.64764ZM7.66164 1.68849C7.67012 1.70547 7.67547 1.72485 7.67661 1.74541L6.67813 1.80057C6.6846 1.91759 6.71511 2.03147 6.76716 2.1356L7.66164 1.68849ZM7.67661 1.74541C7.67775 1.76598 7.67458 1.78618 7.66776 1.8046L6.72998 1.45735C6.68945 1.56682 6.67167 1.68355 6.67813 1.80057L7.67661 1.74541ZM7.66776 1.8046C7.66096 1.82296 7.65097 1.83841 7.63951 1.85057L6.91172 1.16477C6.83264 1.24869 6.7705 1.34794 6.72998 1.45735L7.66776 1.8046ZM3.02194 2.40583C3.19783 2.25439 3.30859 2.03742 3.32158 1.8004L2.32307 1.74571C2.32539 1.70336 2.34506 1.66904 2.36945 1.64803L3.02194 2.40583ZM3.32158 1.8004C3.33457 1.56323 3.24801 1.33491 3.08814 1.16514L2.36012 1.85069C2.33666 1.82579 2.32075 1.78821 2.32307 1.74571L3.32158 1.8004ZM3.08814 1.16514C2.92902 0.996165 2.71091 0.898839 2.48364 0.887455L2.43362 1.8862C2.40993 1.88502 2.38282 1.8748 2.36012 1.85069L3.08814 1.16514ZM2.48364 0.887455C2.25644 0.876075 2.03024 0.951035 1.85511 1.10183L2.5076 1.85963C2.48396 1.87998 2.45724 1.88739 2.43362 1.8862L2.48364 0.887455ZM1.85512 1.10182L0.965261 1.86798L1.61773 2.62579L2.50759 1.85963L1.85512 1.10182ZM0.965712 1.86759C0.597563 2.1838 0.254463 2.47811 0.011282 2.75383L0.761259 3.4153C0.948406 3.20311 1.23031 2.95856 1.61728 2.62618L0.965712 1.86759ZM0.0102542 2.755C-0.251094 3.05319 -0.5 3.44302 -0.5 3.9585H0.5C0.5 3.79207 0.572815 3.63031 0.762287 3.41413L0.0102542 2.755ZM-0.5 3.9585C-0.5 4.47329 -0.251852 4.86321 0.0109375 5.16179L0.761603 4.5011C0.572549 4.2863 0.5 4.12462 0.5 3.9585H-0.5ZM0.0109531 5.1618C0.254301 5.43827 0.597617 5.73275 0.965712 6.04891L1.61728 5.29032C1.23025 4.95789 0.948568 4.71351 0.761588 4.50109L0.0109531 5.1618ZM0.965261 6.04852L1.85512 6.81468L2.50759 6.05687L1.61773 5.29071L0.965261 6.04852ZM1.85511 6.81467C2.03024 6.96546 2.25644 7.04043 2.48364 7.02905L2.43362 6.0303C2.45724 6.02911 2.48396 6.03652 2.5076 6.05687L1.85511 6.81467ZM2.48364 7.02905C2.71092 7.01766 2.92902 6.92033 3.08814 6.75136L2.36012 6.06581C2.38282 6.0417 2.40992 6.03148 2.43362 6.0303L2.48364 7.02905ZM3.08814 6.75136C3.248 6.58159 3.33457 6.35327 3.32158 6.1161L2.32307 6.1708C2.32075 6.12829 2.33667 6.09071 2.36012 6.06581L3.08814 6.75136ZM3.32158 6.1161C3.30859 5.87908 3.19783 5.66212 3.02194 5.51067L2.36945 6.26847C2.34506 6.24746 2.32539 6.21314 2.32307 6.1708L3.32158 6.1161ZM3.02181 5.51056L2.15245 4.76252L1.50022 5.52055L2.36958 6.26858L3.02181 5.51056ZM2.15243 4.76251C1.73746 4.40548 1.49737 4.19583 1.34942 4.02804L0.599351 4.6894C0.80386 4.92134 1.10783 5.18295 1.50023 5.52056L2.15243 4.76251ZM1.35009 4.0288C1.28304 3.95245 1.26335 3.91544 1.25993 3.90822C1.259 3.90625 1.26187 3.91195 1.26458 3.92398C1.26741 3.93652 1.26844 3.94868 1.26844 3.95801H0.268443C0.268443 4.22737 0.392135 4.45343 0.598681 4.68864L1.35009 4.0288ZM1.26844 3.95801C1.26844 3.96762 1.26738 3.97996 1.26452 3.99258C1.26178 4.00468 1.2589 4.01039 1.25985 4.00839C1.2633 4.00111 1.28305 3.96404 1.35009 3.8877L0.598681 3.22786C0.392345 3.46283 0.268443 3.68893 0.268443 3.95801H1.26844ZM1.34982 3.88801C1.49747 3.72014 1.73731 3.51064 2.15217 3.15422L1.5005 2.39571C1.10798 2.73295 0.803757 2.99471 0.59895 3.22756L1.34982 3.88801ZM2.15245 3.15398L3.02181 2.40594L2.36958 1.64792L1.50022 2.39596L2.15245 3.15398Z"
        fill={color}
        mask="url(#path-1-inside-1_1298_1664)"
      />
    </svg>
  );
};

export default GenerateCodeIcon;