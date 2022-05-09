// Modules
import { useSelector } from 'react-redux';
import cn from 'classnames';

// Components

// Styles
import './TotalMines.scss';

export const TotalMines = () => {
    const { isActiveMinins, isActiveFullScreen } = useSelector((state) => state.settingsStore);
    const { total } = useSelector((state) => state.MinesSlice.mines);

    return (
        <div
            className={cn(
                'totalmines',
                { totalmines__hidden: !isActiveMinins },
                { totalmines__hidden: isActiveFullScreen },
            )}>
            {/* --- */}
            <div className="totalmines__info">
                <div className="totalmines__icon">
                    <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2 14.8763C3.28131 14.5447 6.28902 13.9075 8.06936 14.0113C10.2948 14.1411 14.9075 14.8763 16.7688 14.8763C18.2578 14.8763 19 14.8763 22 14.0113M3.78035 18.5991C4.30636 18.1665 6.00578 18.3222 6.32948 18.5991C6.7341 18.9451 7.13873 20.1561 7.01734 20.4156C6.89595 20.6751 5.19653 22.362 4.30636 21.9294C3.59422 21.5834 3.05202 19.3776 3.78035 18.5991ZM10.6994 17.904C10.578 18.596 11.0555 19.0371 11.8324 19.2448C12.8035 19.5043 13.6127 19.2015 13.6532 18.6825C13.6936 18.1635 13.289 17.6012 12.5607 17.4282C11.978 17.2898 10.8613 17.2984 10.6994 17.904ZM16.3237 19.1181C15.7977 19.8534 15.8301 20.9866 16.6069 21.1942C17.578 21.4537 18.185 20.9779 18.5491 20.3724C18.8126 19.9343 18.9133 18.8153 18.185 18.6423C17.6023 18.5039 16.9306 18.5558 16.3237 19.1181Z"
                            stroke="#ccc"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <rect
                            x="5.75"
                            y="8.75"
                            width="13.5"
                            height="2.5"
                            rx="1.25"
                            stroke="#ccc"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M10.75 7.5C10.75 6.5335 11.5335 5.75 12.5 5.75C13.4665 5.75 14.25 6.5335 14.25 7.5V8.25H10.75V7.5Z"
                            stroke="#ccc"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M11.9199 3.48698C12.127 3.12826 12.5857 3.00536 12.9444 3.21246C13.3032 3.41957 13.4261 3.87826 13.219 4.23698L11.594 7.05156L10.2949 6.30156L11.9199 3.48698Z"
                            fill="#ccc"
                        />
                        <path
                            d="M14.625 3.48698C14.8321 3.12826 15.2908 3.00536 15.6495 3.21246C16.0082 3.41957 16.1311 3.87826 15.924 4.23698L14.299 7.05156L13 6.30156L14.625 3.48698Z"
                            fill="#ccc"
                        />
                    </svg>
                </div>

                <div className="totalmines__info-wrapper">
                    <div className="totalmines__header">
                        <div className="totalmines__title">Обстежено територій (га)</div>
                    </div>
                    <div className="totalmines__main">
                        <div className="totalmines__main-box">
                            <h4 className="totalmines__quantity">{total.day.covered_territory}</h4>
                            <span className="totalmines__quantity-title">За добу</span>
                        </div>
                        <div className="totalmines__main-box">
                            <h4 className="totalmines__quantity">
                                {total.total.covered_territory}
                            </h4>
                            <span className="totalmines__quantity-title">Усього</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="totalmines__info">
                <div className="totalmines__icon">
                    <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.0103 16.8101L12.6103 17.4101C14.2317 19.0315 16.4597 19.774 18.7301 19.4501C19.1035 19.3968 19.3969 19.1034 19.4502 18.73C19.7741 16.4596 19.0316 14.2316 17.4102 12.6102L16.8102 12.0102C17.1416 11.6788 17.1416 11.1416 16.8102 10.8102L10.2103 4.21027C9.8789 3.8789 9.34166 3.8789 9.01029 4.21027L7.78991 2.98989C7.45854 2.65852 6.9213 2.65852 6.58992 2.9899L2.98996 6.58986C2.65859 6.92123 2.65859 7.45847 2.98996 7.78984L4.21034 9.01022C3.87897 9.34159 3.87897 9.87883 4.21034 10.2102L10.8103 16.8101C11.1417 17.1415 11.6789 17.1415 12.0103 16.8101ZM15.0103 11.4102L11.4103 15.0101L6.01035 9.61019L9.61031 6.01022L15.0103 11.4102ZM16.2102 13.8101C17.2951 14.895 17.8633 16.3228 17.8259 17.8258C16.3229 17.8632 14.8951 17.2949 13.8103 16.2101L13.2103 15.6101L15.6102 13.2101L16.2102 13.8101ZM4.78997 7.18982L7.18995 4.78985L7.81033 5.41023L5.41036 7.81021L4.78997 7.18982Z"
                            fill="#ccc"
                        />
                    </svg>
                </div>

                <div className="totalmines__info-wrapper">
                    <div className="totalmines__header">
                        <div className="totalmines__title">Знешкоджено ВНП (од.)</div>
                    </div>
                    <div className="totalmines__main">
                        <div className="totalmines__main-box">
                            <h4 className="totalmines__quantity">{total.day.vnp}</h4>
                            <span className="totalmines__quantity-title">За добу</span>
                        </div>
                        <div className="totalmines__main-box">
                            <h4 className="totalmines__quantity">{total.total.vnp}</h4>
                            <span className="totalmines__quantity-title">Усього</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="totalmines__info">
                <div className="totalmines__icon">
                    <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.7664 11.0554L21.4602 8.06501C21.7062 7.63075 21.518 7.07913 21.0579 6.88575L18.8838 5.97203L18.923 5.93081C19.2403 5.59724 19.2271 5.06965 18.8935 4.75238C18.5599 4.43512 18.0323 4.44833 17.7151 4.7819L17.6759 4.82312L16.6544 2.69741C16.4382 2.24759 15.8779 2.08724 15.4565 2.35465L12.5547 4.19612C12.2862 4.36651 12.138 4.67484 12.1728 4.99091L12.4181 7.22442C10.5692 8.03377 8.80242 9.31457 7.27967 10.9156L5.68635 12.5908L4.99988 13.3125L4.99964 13.3128C4.58598 13.7477 4.28198 14.2469 4.0867 14.7755C3.93832 15.1771 3.8526 15.5955 3.82988 16.0157C3.76634 17.1907 4.19312 18.3791 5.10648 19.2479C6.01985 20.1166 7.22821 20.4833 8.39848 20.361C8.81705 20.3173 9.23065 20.2107 9.6243 20.0424C10.1424 19.8209 10.6258 19.4923 11.0395 19.0574L11.0397 19.0571L11.6831 18.3807L13.3195 16.6602C14.8422 15.0592 16.033 13.2306 16.7487 11.3434L18.9917 11.4766C19.3092 11.4955 19.6097 11.332 19.7664 11.0554ZM15.5605 9.58047C15.5488 9.62676 15.5366 9.67305 15.5242 9.71932C15.5179 9.74314 15.5116 9.76693 15.505 9.79075C15.4903 9.84404 15.4749 9.89735 15.4593 9.95064C15.4545 9.96701 15.4499 9.98332 15.4451 9.99969C14.8708 11.9219 13.6949 13.8464 12.1115 15.5112L10.8117 16.8778C8.99307 16.3489 7.75723 15.1535 7.21706 13.4003L8.48757 12.0645C10.071 10.3996 11.9342 9.12891 13.8253 8.45909C13.8414 8.45338 13.8575 8.44804 13.8736 8.44241C13.926 8.42413 13.9785 8.40615 14.031 8.38877C14.0544 8.381 14.0779 8.37356 14.1013 8.36598C14.147 8.35124 14.1926 8.33678 14.2382 8.32278C14.2639 8.3149 14.2896 8.3072 14.3153 8.29951C14.3401 8.29212 14.3649 8.28509 14.3897 8.27792L13.6937 9.00963C13.3765 9.3432 13.3897 9.87079 13.7233 10.1881C14.0568 10.5053 14.5844 10.4921 14.9017 10.1585L15.5976 9.42682C15.5917 9.45193 15.5859 9.47706 15.5798 9.50217C15.5735 9.52836 15.5671 9.55441 15.5605 9.58047ZM6.09261 17.869C6.07479 17.8485 6.05774 17.8276 6.04069 17.8066C6.03256 17.7966 6.02427 17.7867 6.01636 17.7766C6.00057 17.7565 5.98539 17.7361 5.97031 17.7156C5.9619 17.7042 5.95349 17.6928 5.9453 17.6813C5.93109 17.6613 5.91731 17.641 5.90379 17.6207C5.89554 17.6083 5.88735 17.5958 5.87933 17.5832C5.86647 17.5631 5.85392 17.5429 5.84169 17.5225C5.83381 17.5093 5.82618 17.4961 5.81855 17.4828C5.80691 17.4625 5.7954 17.4421 5.78438 17.4215C5.77702 17.4078 5.77004 17.3939 5.76295 17.3801C5.75245 17.3595 5.74193 17.3389 5.73205 17.3182C5.7253 17.304 5.71903 17.2897 5.71259 17.2754C5.70314 17.2545 5.69359 17.2338 5.68474 17.2127C5.67877 17.1984 5.67335 17.184 5.66769 17.1696C5.64592 17.115 5.62572 17.0598 5.60799 17.0039C5.60774 17.0031 5.60742 17.0023 5.60715 17.0015C5.60133 16.983 5.59633 16.9644 5.59091 16.9458C5.5855 16.9271 5.57984 16.9085 5.57484 16.8897C5.57001 16.8716 5.56585 16.8534 5.5615 16.8352C5.55681 16.8157 5.55201 16.7963 5.54779 16.7767C5.54391 16.7586 5.54053 16.7405 5.53704 16.7224C5.53317 16.7025 5.52935 16.6825 5.526 16.6624C5.52301 16.6445 5.52037 16.6266 5.51774 16.6087C5.51477 16.5882 5.51193 16.5676 5.50943 16.5471C5.5073 16.5294 5.5054 16.5118 5.50362 16.4941C5.50152 16.473 5.49972 16.4518 5.49816 16.4306C5.4969 16.4134 5.4957 16.3962 5.49477 16.3789C5.49358 16.3569 5.49287 16.3349 5.49226 16.3128C5.49182 16.2963 5.49129 16.2798 5.49115 16.2633C5.49096 16.24 5.49137 16.2167 5.49181 16.1934C5.49211 16.1781 5.49217 16.1627 5.49278 16.1473C5.49376 16.1213 5.49548 16.0952 5.49726 16.0692C5.49814 16.0566 5.49865 16.044 5.49969 16.0314C5.50612 15.954 5.5161 15.8767 5.52962 15.7999C5.53175 15.7877 5.53443 15.7757 5.53675 15.7635C5.54176 15.7373 5.54683 15.7111 5.55267 15.685C5.55595 15.6704 5.5597 15.6558 5.56323 15.6411C5.56889 15.6177 5.57463 15.5943 5.58099 15.571C5.58521 15.5554 5.58985 15.5398 5.59438 15.5243C5.6009 15.5021 5.60753 15.4799 5.61463 15.4578C5.61979 15.4418 5.62516 15.4259 5.63063 15.41C5.63802 15.3885 5.64572 15.367 5.65372 15.3456C5.65968 15.3297 5.66577 15.3137 5.67206 15.2979C5.68049 15.2767 5.6893 15.2555 5.69828 15.2345C5.70499 15.2188 5.7117 15.2031 5.71871 15.1875C5.72827 15.1663 5.73838 15.1453 5.74852 15.1243C5.75583 15.1092 5.76297 15.0941 5.77058 15.0791C5.7817 15.0573 5.79348 15.0356 5.80524 15.014C5.81274 15.0002 5.81997 14.9863 5.82772 14.9727C5.84188 14.9478 5.85688 14.9232 5.87191 14.8987C5.87807 14.8886 5.88384 14.8784 5.89017 14.8684C5.91117 14.8352 5.93304 14.8024 5.95572 14.77C6.66853 16.341 7.8924 17.513 9.51852 18.1884C9.50211 18.2009 9.48556 18.2131 9.46894 18.2251C9.45662 18.234 9.44444 18.2433 9.432 18.252C9.40503 18.2708 9.37768 18.2888 9.35015 18.3066C9.34387 18.3106 9.33771 18.315 9.33137 18.319C9.29761 18.3403 9.26343 18.3607 9.22891 18.3804C9.21749 18.3869 9.20584 18.3928 9.19436 18.3991C9.17083 18.412 9.14728 18.4248 9.12345 18.437C9.10954 18.4441 9.09547 18.4506 9.08146 18.4574C9.0597 18.468 9.03793 18.4785 9.01599 18.4884C9.00107 18.4952 8.986 18.5015 8.97096 18.508C8.94958 18.5172 8.92814 18.5262 8.90657 18.5348C8.89117 18.5409 8.87567 18.5468 8.86018 18.5526C8.83863 18.5607 8.81696 18.5685 8.79524 18.576C8.7797 18.5813 8.76416 18.5866 8.74853 18.5916C8.72644 18.5988 8.70425 18.6055 8.682 18.612C8.66666 18.6165 8.65133 18.6211 8.6359 18.6253C8.61273 18.6316 8.58949 18.6374 8.56623 18.6431C8.55162 18.6467 8.53706 18.6504 8.52241 18.6537C8.49688 18.6595 8.47125 18.6645 8.44562 18.6695C8.43313 18.6719 8.42071 18.6746 8.40819 18.6769C8.37322 18.6831 8.33817 18.6885 8.30306 18.6933C8.29978 18.6937 8.2965 18.6943 8.29323 18.6948C8.25488 18.6998 8.21646 18.7039 8.17799 18.7072C8.16555 18.7083 8.15307 18.7088 8.14057 18.7097C8.11461 18.7115 8.08862 18.7133 8.06264 18.7143C8.04713 18.715 8.03157 18.7151 8.01605 18.7154C7.99312 18.716 7.97022 18.7164 7.94731 18.7163C7.93047 18.7162 7.91366 18.7157 7.89684 18.7153C7.87527 18.7147 7.8537 18.7141 7.83217 18.713C7.81463 18.7121 7.7971 18.711 7.77958 18.7097C7.75884 18.7082 7.7381 18.7064 7.7174 18.7045C7.69939 18.7027 7.68141 18.7008 7.66345 18.6987C7.64332 18.6963 7.62327 18.6936 7.60322 18.6907C7.58494 18.6881 7.56666 18.6855 7.54846 18.6825C7.52889 18.6792 7.50937 18.6755 7.48985 18.6718C7.47135 18.6683 7.45284 18.6649 7.43441 18.661C7.4156 18.6569 7.39691 18.6523 7.37815 18.6478C7.35924 18.6433 7.34026 18.6391 7.32145 18.6341C7.30445 18.6297 7.2876 18.6245 7.27068 18.6197C7.22851 18.6076 7.18661 18.5944 7.14504 18.5801C7.13247 18.5757 7.11977 18.5718 7.10727 18.5672C7.08555 18.5593 7.06408 18.5506 7.04255 18.5421C7.02829 18.5365 7.01395 18.5311 6.99982 18.5252C6.97859 18.5163 6.95757 18.5068 6.93652 18.4973C6.92241 18.4909 6.90826 18.4847 6.89425 18.4781C6.87322 18.4681 6.8524 18.4576 6.83162 18.447C6.81799 18.4401 6.80438 18.4332 6.79088 18.4259C6.76998 18.4148 6.74927 18.4032 6.72866 18.3914C6.71568 18.384 6.70278 18.3765 6.6899 18.3688C6.66908 18.3564 6.6484 18.3437 6.62792 18.3307C6.61582 18.3229 6.60379 18.3149 6.59176 18.307C6.57085 18.2932 6.55002 18.2792 6.52948 18.2646C6.51868 18.257 6.50809 18.249 6.49742 18.2412C6.47602 18.2255 6.45465 18.2098 6.43365 18.1933C6.4255 18.1869 6.41751 18.1801 6.40941 18.1736C6.35681 18.1313 6.30531 18.0868 6.25557 18.0395C6.20509 17.9915 6.15749 17.9416 6.11202 17.8904C6.1056 17.8834 6.09895 17.8763 6.09261 17.869ZM14.0316 6.64596L13.8866 5.32534L15.558 4.26471L16.4471 6.11499L15.9917 6.59379C15.9636 6.56705 15.9337 6.54279 15.9026 6.52052C15.8891 6.51083 15.8753 6.50155 15.8612 6.49273C15.8434 6.48146 15.8252 6.47083 15.8066 6.46102C15.8036 6.45946 15.8008 6.45774 15.7979 6.45623C15.7921 6.45328 15.7862 6.4507 15.7804 6.44788C15.7721 6.44384 15.7638 6.43965 15.7553 6.43585C15.7526 6.43468 15.7499 6.43372 15.7472 6.43257C15.7355 6.42751 15.7237 6.4225 15.7117 6.41799C15.6892 6.40949 15.6663 6.40229 15.6431 6.39577C15.636 6.39377 15.629 6.39157 15.6219 6.38973C15.5991 6.38394 15.5759 6.37944 15.5526 6.37563C15.5293 6.37179 15.5059 6.36862 15.4823 6.36675C15.4548 6.36462 15.4271 6.36407 15.3994 6.36465C15.3953 6.36472 15.3913 6.3646 15.3872 6.36473C15.3773 6.36509 15.3675 6.36595 15.3576 6.36667C15.3515 6.36712 15.3455 6.36727 15.3395 6.36784C15.3295 6.36875 15.3196 6.37021 15.3097 6.37149C15.3037 6.37224 15.2977 6.37278 15.2917 6.37371C15.2917 6.37371 15.2917 6.37371 15.2916 6.37373C15.2916 6.37373 15.2916 6.37373 15.2916 6.37376C15.2914 6.37379 15.2913 6.3738 15.2911 6.37386C15.1932 6.38875 15.0954 6.40546 14.9976 6.4233C14.9669 6.42891 14.9361 6.43523 14.9053 6.44112C14.8375 6.45412 14.7696 6.46754 14.7017 6.4819C14.6664 6.48942 14.6311 6.49735 14.5957 6.50523C14.5312 6.51958 14.4667 6.53452 14.4023 6.55009C14.3674 6.55854 14.3324 6.56712 14.2975 6.57596C14.2292 6.5932 14.161 6.6113 14.0928 6.62989C14.0724 6.63543 14.052 6.64026 14.0316 6.64596ZM17.2457 9.7029C17.2503 9.68224 17.2541 9.66167 17.2587 9.64102C17.2739 9.57194 17.2885 9.50286 17.3023 9.43381C17.3094 9.39848 17.3162 9.36316 17.3229 9.32786C17.3352 9.26277 17.3469 9.1977 17.358 9.13261C17.3641 9.09683 17.3703 9.06105 17.376 9.02531C17.387 8.95691 17.3969 8.88851 17.4066 8.82011C17.4109 8.78908 17.4157 8.75804 17.4197 8.72701C17.4326 8.62841 17.4444 8.52983 17.4544 8.43139C17.4544 8.4312 17.4544 8.43103 17.4545 8.43086C17.4545 8.43086 17.4545 8.43086 17.4545 8.43083C17.4545 8.43083 17.4545 8.43083 17.4545 8.43081C17.4552 8.42477 17.4554 8.41876 17.4559 8.4127C17.4567 8.40273 17.4576 8.39273 17.458 8.38277C17.4583 8.37671 17.4581 8.37066 17.4583 8.36463C17.4585 8.3547 17.4589 8.3448 17.4587 8.33491C17.4587 8.33218 17.4584 8.32942 17.4583 8.32668C17.4573 8.28291 17.4529 8.23949 17.4451 8.19685C17.4438 8.18972 17.4422 8.18263 17.4407 8.17551C17.4355 8.15066 17.4294 8.12604 17.422 8.10183C17.4204 8.09664 17.4185 8.09158 17.4168 8.0864C17.4087 8.0617 17.3997 8.03736 17.3893 8.01352C17.3882 8.01095 17.3869 8.00844 17.3857 8.0059C17.3805 7.99414 17.3751 7.98239 17.3693 7.97088C17.3685 7.96935 17.3676 7.96791 17.3668 7.96641C17.346 7.92594 17.3221 7.88702 17.2948 7.85023C17.2911 7.84529 17.2871 7.84055 17.2833 7.83567C17.2579 7.80292 17.2302 7.77173 17.1997 7.74272L17.6551 7.26392L19.5476 8.0593L18.572 9.78171L17.2457 9.7029Z"
                            fill="#ccc"
                        />
                    </svg>
                </div>

                <div className="totalmines__info-wrapper">
                    <div className="totalmines__header">
                        <div className="totalmines__title">У тому числі авіабомб</div>
                    </div>
                    <div className="totalmines__main">
                        <div className="totalmines__main-box">
                            <h4 className="totalmines__quantity">{total.day.bomb}</h4>
                            <span className="totalmines__quantity-title">За добу</span>
                        </div>
                        <div className="totalmines__main-box">
                            <h4 className="totalmines__quantity">{total.total.bomb}</h4>
                            <span className="totalmines__quantity-title">Усього</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="totalmines__info">
                <div className="totalmines__icon">
                    <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 14.0925C8.10117 14.0925 4.92926 17.2644 4.92926 21.1632V22H19.0707V21.1632C19.0707 17.2644 15.8988 14.0925 12 14.0925ZM11.1632 15.8311V20.3265H6.66757C7.02809 18.0191 8.85586 16.1917 11.1632 15.8311ZM12.8368 20.3265V15.8311C15.1441 16.1917 16.9718 18.019 17.3324 20.3265H12.8368Z"
                            fill="#ccc"
                        />
                        <path
                            d="M7.70456 9.04399C7.70456 11.4125 9.63148 13.3394 12 13.3394C14.3685 13.3394 16.2954 11.4125 16.2954 9.04399C16.2954 9.00513 16.2944 8.9663 16.2934 8.92743H18.2339V7.25389H16.2954V7.13218C16.2954 5.04995 14.806 3.30926 12.8367 2.91882V2H11.1632V2.91886C9.19389 3.3093 7.70452 5.04999 7.70452 7.13222V7.25393H5.76605V8.92747H7.70661C7.70557 8.96626 7.70456 9.00513 7.70456 9.04399ZM14.6219 9.04399C14.6219 10.4897 13.4457 11.6659 12 11.6659C10.5542 11.6659 9.37806 10.4897 9.37806 9.04399C9.37806 9.00513 9.37928 8.96626 9.38099 8.92743H14.6189C14.6207 8.96626 14.6219 9.00513 14.6219 9.04399ZM14.6219 7.13222V7.25393H12.8367V4.64805C13.8732 4.99816 14.6219 5.97906 14.6219 7.13222ZM9.37811 7.13222C9.37811 5.97911 10.1267 4.99816 11.1632 4.64805V7.25389H9.37811V7.13222Z"
                            fill="#ccc"
                        />
                    </svg>
                </div>

                <div className="totalmines__info-wrapper">
                    <div className="totalmines__header">
                        <div className="totalmines__title">Кількість залучень</div>
                    </div>
                    <div className="totalmines__main">
                        <div className="totalmines__main-box">
                            <h4 className="totalmines__quantity">{total.day.number_involvement}</h4>
                            <span className="totalmines__quantity-title">За добу</span>
                        </div>
                        <div className="totalmines__main-box">
                            <h4 className="totalmines__quantity">
                                {total.total.number_involvement}
                            </h4>
                            <span className="totalmines__quantity-title">Усього</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* --- */}
        </div>
    );
};
