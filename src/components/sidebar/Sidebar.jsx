import './Sidebar.scss'
import profile from "../../img/Profile.svg";

function Sidebar() {
    return (
        <div className="side_bar">
        <div className="profile">
          <img src={profile} alt="" />
          <h3>KRIS_ANFALOVA</h3>
          <div className="ranking">
            <div className="rank">
              <p>SILVER</p>
            </div>
            <p className="up">повысить</p>
          </div>
          <div className="subscribe">
            <p>
              Осталось дней подписки <strong>21</strong>
            </p>
          </div>
        </div>
        <div className="wallet">
          <div className="balance">
            <p>Баланс</p>
            <h3>5000 ₽</h3>
            <a href="">вывести</a>
          </div>
          <div className="bonus">
            <p>Бонус</p>
            <h3>5000 ₽</h3>
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebar__icons">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.1662 2.88082C11.9388 2.23699 13.0611 2.23699 13.8337 2.88082L22.1671 9.82526C22.6421 10.2211 22.9167 10.8074 22.9167 11.4258V20.8337C22.9167 21.9843 21.9839 22.917 20.8333 22.917H4.16665C3.01605 22.917 2.08331 21.9843 2.08331 20.8337V11.4258C2.08331 10.8074 2.35795 10.2211 2.83293 9.82526L11.1662 2.88082ZM12.5 4.48128L4.16665 11.4258V20.8337H8.33331V17.1878C8.33331 16.0372 9.26605 15.1045 10.4166 15.1045H14.5833C15.7339 15.1045 16.6667 16.0372 16.6667 17.1878V20.8337H20.8333V11.4258L12.5 4.48128ZM14.5833 20.8337V17.1878H10.4166V20.8337H14.5833Z"
                fill="#8B97AE"
              />
            </svg>

            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1563 14.8437C10.1592 14.3197 10.0303 13.8033 9.78141 13.3421C9.53253 12.8809 9.17165 12.4897 8.73199 12.2045C8.29233 11.9193 7.78801 11.7492 7.26541 11.71C6.74282 11.6707 6.21874 11.7635 5.74141 11.9798C5.26407 12.1961 4.8488 12.529 4.5338 12.9478C4.2188 13.3667 4.01419 13.858 3.9388 14.3766C3.86341 14.8952 3.91966 15.4245 4.10237 15.9157C4.28508 16.4069 4.58838 16.8442 4.98438 17.1875C4.64819 17.4789 4.3781 17.8387 4.19217 18.2429C4.00624 18.6471 3.90876 19.0863 3.90625 19.5312V21.875C3.90625 22.0822 3.98856 22.2809 4.13507 22.4274C4.28159 22.5739 4.4803 22.6562 4.6875 22.6562H6.25C6.4572 22.6562 6.65591 22.5739 6.80243 22.4274C6.94894 22.2809 7.03125 22.0822 7.03125 21.875C7.03125 21.6678 6.94894 21.4691 6.80243 21.3225C6.65591 21.176 6.4572 21.0937 6.25 21.0937H5.46875V19.5312C5.46875 19.1168 5.63337 18.7194 5.9264 18.4264C6.21942 18.1333 6.61685 17.9687 7.03125 17.9687C7.44565 17.9687 7.84308 18.1333 8.1361 18.4264C8.42913 18.7194 8.59375 19.1168 8.59375 19.5312V21.875C8.59375 22.0822 8.67606 22.2809 8.82257 22.4274C8.96909 22.5739 9.1678 22.6562 9.375 22.6562C9.5822 22.6562 9.78091 22.5739 9.92743 22.4274C10.0739 22.2809 10.1563 22.0822 10.1563 21.875V19.5312C10.1537 19.0863 10.0563 18.6471 9.87033 18.2429C9.6844 17.8387 9.41431 17.4789 9.07813 17.1875C9.41431 16.8961 9.6844 16.5362 9.87033 16.132C10.0563 15.7279 10.1537 15.2886 10.1563 14.8437ZM5.46875 14.8437C5.46875 14.5347 5.56039 14.2326 5.73208 13.9756C5.90377 13.7187 6.1478 13.5184 6.43331 13.4002C6.71882 13.2819 7.03298 13.251 7.33608 13.3112C7.63917 13.3715 7.91758 13.5203 8.1361 13.7389C8.35462 13.9574 8.50344 14.2358 8.56373 14.5389C8.62402 14.842 8.59307 15.1562 8.47481 15.4417C8.35655 15.7272 8.15628 15.9712 7.89933 16.1429C7.64238 16.3146 7.34028 16.4062 7.03125 16.4062C6.61685 16.4062 6.21942 16.2416 5.9264 15.9486C5.63337 15.6555 5.46875 15.2581 5.46875 14.8437Z"
                fill="#8B97AE"
              />
              <path
                d="M20.0156 17.1875C20.497 16.7703 20.8393 16.2159 20.9968 15.5986C21.1542 14.9813 21.1193 14.3307 20.8966 13.7338C20.6739 13.137 20.2742 12.6224 19.7509 12.2591C19.2276 11.8959 18.6058 11.7012 17.9688 11.7012C17.3317 11.7012 16.7099 11.8959 16.1866 12.2591C15.6633 12.6224 15.2636 13.137 15.0409 13.7338C14.8182 14.3307 14.7833 14.9813 14.9407 15.5986C15.0982 16.2159 15.4405 16.7703 15.9219 17.1875C15.5857 17.4789 15.3156 17.8388 15.1297 18.2429C14.9437 18.6471 14.8463 19.0864 14.8438 19.5313V21.875C14.8438 22.0822 14.9261 22.2809 15.0726 22.4274C15.2191 22.574 15.4178 22.6563 15.625 22.6563C15.8322 22.6563 16.0309 22.574 16.1774 22.4274C16.3239 22.2809 16.4062 22.0822 16.4062 21.875V19.5313C16.4062 19.1169 16.5709 18.7194 16.8639 18.4264C17.1569 18.1334 17.5543 17.9688 17.9688 17.9688C18.3832 17.9688 18.7806 18.1334 19.0736 18.4264C19.3666 18.7194 19.5312 19.1169 19.5312 19.5313V21.0938H18.75C18.5428 21.0938 18.3441 21.1761 18.1976 21.3226C18.0511 21.4691 17.9688 21.6678 17.9688 21.875C17.9688 22.0822 18.0511 22.2809 18.1976 22.4274C18.3441 22.574 18.5428 22.6563 18.75 22.6563H20.3125C20.5197 22.6563 20.7184 22.574 20.8649 22.4274C21.0114 22.2809 21.0938 22.0822 21.0938 21.875V19.5313C21.0912 19.0864 20.9938 18.6471 20.8078 18.2429C20.6219 17.8388 20.3518 17.4789 20.0156 17.1875ZM16.4062 14.8438C16.4062 14.5347 16.4979 14.2326 16.6696 13.9757C16.8413 13.7187 17.0853 13.5185 17.3708 13.4002C17.6563 13.2819 17.9705 13.251 18.2736 13.3113C18.5767 13.3716 18.8551 13.5204 19.0736 13.7389C19.2921 13.9574 19.4409 14.2358 19.5012 14.5389C19.5615 14.842 19.5306 15.1562 19.4123 15.4417C19.2941 15.7272 19.0938 15.9712 18.8368 16.1429C18.5799 16.3146 18.2778 16.4063 17.9688 16.4063C17.5543 16.4063 17.1569 16.2416 16.8639 15.9486C16.5709 15.6556 16.4062 15.2582 16.4062 14.8438Z"
                fill="#8B97AE"
              />
              <path
                d="M6.25 10.1562C6.4572 10.1562 6.65591 10.0739 6.80243 9.92743C6.94894 9.78091 7.03125 9.5822 7.03125 9.375V4.6875C7.03125 4.4803 7.11356 4.28159 7.26007 4.13507C7.40659 3.98856 7.6053 3.90625 7.8125 3.90625H15.625C15.8322 3.90625 16.0309 3.98856 16.1774 4.13507C16.3239 4.28159 16.4062 4.4803 16.4062 4.6875V6.25C16.4058 6.35336 16.3849 6.45562 16.3447 6.55083C16.3044 6.64605 16.2457 6.73233 16.1719 6.80469C16.0264 6.94902 15.83 7.03039 15.625 7.03125H9.375C9.1678 7.03125 8.96909 7.11356 8.82257 7.26007C8.67606 7.40659 8.59375 7.6053 8.59375 7.8125C8.59375 8.0197 8.67606 8.21841 8.82257 8.36493C8.96909 8.51144 9.1678 8.59375 9.375 8.59375H15.625C16.2466 8.59375 16.8427 8.34682 17.2823 7.90728C17.7218 7.46774 17.9688 6.8716 17.9688 6.25V4.6875C17.9688 4.0659 17.7218 3.46976 17.2823 3.03022C16.8427 2.59068 16.2466 2.34375 15.625 2.34375H7.8125C7.1909 2.34375 6.59476 2.59068 6.15522 3.03022C5.71568 3.46976 5.46875 4.0659 5.46875 4.6875V9.375C5.46875 9.5822 5.55106 9.78091 5.69757 9.92743C5.84409 10.0739 6.0428 10.1562 6.25 10.1562Z"
                fill="#8B97AE"
              />
            </svg>

            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35938 9.82814C4.50538 9.68332 4.67853 9.56875 4.8689 9.49099C5.05927 9.41324 5.26312 9.37382 5.46875 9.37501C5.88315 9.37501 6.28058 9.53963 6.57361 9.83266C6.86663 10.1257 7.03125 10.5231 7.03125 10.9375C7.03125 11.1447 7.11356 11.3434 7.26008 11.4899C7.40659 11.6365 7.6053 11.7188 7.8125 11.7188C8.01971 11.7188 8.21842 11.6365 8.36493 11.4899C8.51145 11.3434 8.59376 11.1447 8.59376 10.9375C8.59124 10.4926 8.49377 10.0534 8.30784 9.64919C8.12191 9.245 7.85182 8.88517 7.51563 8.59376C7.99699 8.17651 8.33933 7.6221 8.49679 7.00484C8.65425 6.38757 8.6193 5.73692 8.39662 5.14008C8.17395 4.54323 7.77418 4.02869 7.25089 3.6654C6.72761 3.30211 6.10579 3.10742 5.46875 3.10742C4.83172 3.10742 4.2099 3.30211 3.68661 3.6654C3.16332 4.02869 2.76356 4.54323 2.54088 5.14008C2.31821 5.73692 2.28326 6.38757 2.44072 7.00484C2.59817 7.6221 2.94052 8.17651 3.42188 8.59376C3.36719 8.64064 3.30469 8.6797 3.25781 8.72657C2.96771 9.017 2.73766 9.36175 2.58082 9.74111C2.42399 10.1205 2.34343 10.527 2.34375 10.9375C2.34375 11.1447 2.42606 11.3434 2.57257 11.4899C2.71909 11.6365 2.9178 11.7188 3.125 11.7188C3.3322 11.7188 3.53092 11.6365 3.67743 11.4899C3.82394 11.3434 3.90625 11.1447 3.90625 10.9375C3.90506 10.7319 3.94448 10.528 4.02223 10.3377C4.09999 10.1473 4.21456 9.97414 4.35938 9.82814ZM5.46875 4.68751C5.77779 4.68751 6.07988 4.77915 6.33683 4.95084C6.59378 5.12253 6.79405 5.36656 6.91232 5.65207C7.03058 5.93758 7.06152 6.25175 7.00123 6.55484C6.94094 6.85794 6.79213 7.13635 6.57361 7.35487C6.35509 7.57339 6.07668 7.7222 5.77358 7.78249C5.47049 7.84278 5.15632 7.81184 4.87081 7.69357C4.5853 7.57531 4.34127 7.37504 4.16958 7.11809C3.99789 6.86114 3.90625 6.55905 3.90625 6.25001C3.90625 5.83561 4.07087 5.43818 4.3639 5.14516C4.65692 4.85213 5.05435 4.68751 5.46875 4.68751Z"
                fill="#8B97AE"
              />
              <path
                d="M9.375 10.9375C9.375 11.1447 9.45731 11.3434 9.60382 11.4899C9.75034 11.6365 9.94905 11.7188 10.1563 11.7188C10.3635 11.7188 10.5622 11.6365 10.7087 11.4899C10.8552 11.3434 10.9375 11.1447 10.9375 10.9375C10.9375 10.5231 11.1021 10.1257 11.3951 9.83266C11.6882 9.53963 12.0856 9.37501 12.5 9.37501C12.9144 9.37501 13.3118 9.53963 13.6049 9.83266C13.8979 10.1257 14.0625 10.5231 14.0625 10.9375C14.0625 11.1447 14.1448 11.3434 14.2913 11.4899C14.4378 11.6365 14.6366 11.7188 14.8438 11.7188C15.051 11.7188 15.2497 11.6365 15.3962 11.4899C15.5427 11.3434 15.625 11.1447 15.625 10.9375C15.6225 10.4926 15.525 10.0534 15.3391 9.64919C15.1532 9.245 14.8831 8.88517 14.5469 8.59376C15.0282 8.17651 15.3706 7.6221 15.528 7.00484C15.6855 6.38757 15.6505 5.73692 15.4279 5.14008C15.2052 4.54323 14.8054 4.02869 14.2821 3.6654C13.7589 3.30211 13.137 3.10742 12.5 3.10742C11.863 3.10742 11.2411 3.30211 10.7179 3.6654C10.1946 4.02869 9.79481 4.54323 9.57213 5.14008C9.34946 5.73692 9.31451 6.38757 9.47196 7.00484C9.62942 7.6221 9.97177 8.17651 10.4531 8.59376C10.1169 8.88517 9.84685 9.245 9.66092 9.64919C9.47499 10.0534 9.37751 10.4926 9.375 10.9375ZM10.9375 6.25001C10.9375 5.94098 11.0291 5.63889 11.2008 5.38193C11.3725 5.12498 11.6165 4.92471 11.9021 4.80645C12.1876 4.68819 12.5017 4.65725 12.8048 4.71754C13.1079 4.77782 13.3863 4.92664 13.6049 5.14516C13.8234 5.36368 13.9722 5.64209 14.0325 5.94518C14.0928 6.24828 14.0618 6.56245 13.9436 6.84795C13.8253 7.13346 13.625 7.37749 13.3681 7.54918C13.1111 7.72087 12.809 7.81251 12.5 7.81251C12.0856 7.81251 11.6882 7.64789 11.3951 7.35487C11.1021 7.06184 10.9375 6.66441 10.9375 6.25001Z"
                fill="#8B97AE"
              />
              <path
                d="M21.5781 8.59376C22.0595 8.17651 22.4018 7.6221 22.5593 7.00484C22.7167 6.38757 22.6818 5.73692 22.4591 5.14008C22.2364 4.54323 21.8367 4.02869 21.3134 3.6654C20.7901 3.30211 20.1683 3.10742 19.5313 3.10742C18.8942 3.10742 18.2724 3.30211 17.7491 3.6654C17.2258 4.02869 16.8261 4.54323 16.6034 5.14008C16.3807 5.73692 16.3458 6.38757 16.5032 7.00484C16.6607 7.6221 17.003 8.17651 17.4844 8.59376C17.4297 8.64064 17.3672 8.6797 17.3203 8.72657C17.0302 9.017 16.8002 9.36175 16.6433 9.74111C16.4865 10.1205 16.4059 10.527 16.4063 10.9375C16.4063 11.1447 16.4886 11.3434 16.6351 11.4899C16.7816 11.6365 16.9803 11.7188 17.1875 11.7188C17.3947 11.7188 17.5934 11.6365 17.7399 11.4899C17.8864 11.3434 17.9688 11.1447 17.9688 10.9375C17.9688 10.5231 18.1334 10.1257 18.4264 9.83266C18.7194 9.53963 19.1169 9.37501 19.5313 9.37501C19.9457 9.37501 20.3431 9.53963 20.6361 9.83266C20.9291 10.1257 21.0938 10.5231 21.0938 10.9375C21.0938 11.1447 21.1761 11.3434 21.3226 11.4899C21.4691 11.6365 21.6678 11.7188 21.875 11.7188C22.0822 11.7188 22.2809 11.6365 22.4274 11.4899C22.5739 11.3434 22.6563 11.1447 22.6563 10.9375C22.6537 10.4926 22.5563 10.0534 22.3703 9.64919C22.1844 9.245 21.9143 8.88517 21.5781 8.59376ZM19.5313 4.68751C19.8403 4.68751 20.1424 4.77915 20.3993 4.95084C20.6563 5.12253 20.8566 5.36656 20.9748 5.65207C21.0931 5.93758 21.124 6.25175 21.0637 6.55484C21.0034 6.85794 20.8546 7.13635 20.6361 7.35487C20.4176 7.57339 20.1392 7.7222 19.8361 7.78249C19.533 7.84278 19.2188 7.81184 18.9333 7.69357C18.6478 7.57531 18.4038 7.37504 18.2321 7.11809C18.0604 6.86114 17.9688 6.55905 17.9688 6.25001C17.9688 5.83561 18.1334 5.43818 18.4264 5.14516C18.7194 4.85213 19.1169 4.68751 19.5313 4.68751Z"
                fill="#8B97AE"
              />
              <path
                d="M20.3126 18.7498H8.13295L8.36732 18.5232C8.51443 18.3761 8.59708 18.1766 8.59708 17.9685C8.59708 17.7605 8.51443 17.561 8.36732 17.4138C8.22021 17.2667 8.02068 17.1841 7.81263 17.1841C7.60458 17.1841 7.40506 17.2667 7.25795 17.4138L5.69545 18.9763C5.62432 19.0506 5.56857 19.1383 5.53138 19.2342C5.45324 19.4244 5.45324 19.6377 5.53138 19.8279C5.56857 19.9238 5.62432 20.0114 5.69545 20.0857L7.25795 21.6482C7.33057 21.7214 7.41698 21.7796 7.51218 21.8192C7.60738 21.8589 7.7095 21.8793 7.81263 21.8793C7.91577 21.8793 8.01788 21.8589 8.11308 21.8192C8.20829 21.7796 8.29469 21.7214 8.36732 21.6482C8.44055 21.5756 8.49867 21.4892 8.53833 21.394C8.57799 21.2988 8.59841 21.1967 8.59841 21.0935C8.59841 20.9904 8.57799 20.8883 8.53833 20.7931C8.49867 20.6979 8.44055 20.6115 8.36732 20.5388L8.13295 20.3123H20.3126C20.5198 20.3123 20.7185 20.23 20.8651 20.0835C21.0116 19.9369 21.0939 19.7382 21.0939 19.531C21.0939 19.3238 21.0116 19.1251 20.8651 18.9786C20.7185 18.8321 20.5198 18.7498 20.3126 18.7498Z"
                fill="#8B97AE"
              />
              <path
                d="M10.3828 15.8513C10.3096 15.924 10.2515 16.0104 10.2118 16.1056C10.1721 16.2008 10.1517 16.3029 10.1517 16.406C10.1517 16.5092 10.1721 16.6113 10.2118 16.7065C10.2515 16.8017 10.3096 16.8881 10.3828 16.9607C10.4554 17.0339 10.5418 17.0921 10.637 17.1317C10.7323 17.1714 10.8344 17.1918 10.9375 17.1918C11.0406 17.1918 11.1427 17.1714 11.2379 17.1317C11.3332 17.0921 11.4196 17.0339 11.4922 16.9607L13.0547 15.3982C13.1258 15.3239 13.1816 15.2363 13.2187 15.1404C13.2969 14.9502 13.2969 14.7369 13.2187 14.5467C13.1816 14.4508 13.1258 14.3631 13.0547 14.2888L11.4922 12.7263C11.3451 12.5792 11.1455 12.4966 10.9375 12.4966C10.7295 12.4966 10.5299 12.5792 10.3828 12.7263C10.2357 12.8735 10.1531 13.073 10.1531 13.281C10.1531 13.4891 10.2357 13.6886 10.3828 13.8357L10.6172 14.0623H4.6875C4.4803 14.0623 4.28159 14.1446 4.13507 14.2911C3.98856 14.4376 3.90625 14.6363 3.90625 14.8435C3.90625 15.0507 3.98856 15.2494 4.13507 15.396C4.28159 15.5425 4.4803 15.6248 4.6875 15.6248H10.6172L10.3828 15.8513Z"
                fill="#8B97AE"
              />
            </svg>

            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.5019 9.23478L11.2392 7.9721C10.0838 6.81668 8.2105 6.81668 7.05507 7.97211C5.89967 9.12755 5.89965 11.0008 7.05502 12.1562L8.31765 13.4189L12.5017 17.6033L17.9341 12.1709L17.9487 12.1564C19.1042 11.0009 19.1042 9.12764 17.9487 7.97219C16.7933 6.81678 14.9201 6.81676 13.7646 7.97214L12.5019 9.23478ZM12.5017 20.1286L5.79214 13.4191C3.93943 11.5662 3.93962 8.56218 5.79238 6.70941C7.64518 4.85663 10.6491 4.85663 12.5019 6.70941C14.3547 4.85671 17.3586 4.85674 19.2114 6.7095C21.0642 8.56229 21.0642 11.5663 19.2114 13.4191L19.1883 13.442L12.5017 20.1286Z"
                fill="#8B97AE"
              />
            </svg>

            <svg
              width="23"
              height="25"
              viewBox="0 0 23 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.625 5.46872C15.6279 4.94466 15.499 4.42828 15.2502 3.96708C15.0013 3.50589 14.6404 3.11469 14.2007 2.82948C13.7611 2.54427 13.2568 2.37422 12.7342 2.33495C12.2116 2.29569 11.6875 2.38849 11.2102 2.60481C10.7328 2.82112 10.3175 3.15401 10.0025 3.57285C9.68755 3.99168 9.48294 4.48301 9.40755 5.00162C9.33216 5.52024 9.38841 6.04948 9.57112 6.54067C9.75383 7.03185 10.0571 7.4692 10.4531 7.81247C10.1169 8.10388 9.84685 8.46371 9.66092 8.8679C9.47499 9.27209 9.37751 9.71132 9.375 10.1562C9.375 10.3634 9.45731 10.5621 9.60382 10.7086C9.75034 10.8552 9.94905 10.9375 10.1562 10.9375C10.3634 10.9375 10.5622 10.8552 10.7087 10.7086C10.8552 10.5621 10.9375 10.3634 10.9375 10.1562C10.9375 9.74182 11.1021 9.34439 11.3951 9.05137C11.6882 8.75834 12.0856 8.59372 12.5 8.59372C12.9144 8.59372 13.3118 8.75834 13.6049 9.05137C13.8979 9.34439 14.0625 9.74182 14.0625 10.1562C14.0625 10.3634 14.1448 10.5621 14.2913 10.7086C14.4378 10.8552 14.6365 10.9375 14.8437 10.9375C15.0509 10.9375 15.2497 10.8552 15.3962 10.7086C15.5427 10.5621 15.625 10.3634 15.625 10.1562C15.6225 9.71132 15.525 9.27209 15.3391 8.8679C15.1532 8.46371 14.8831 8.10388 14.5469 7.81247C14.8831 7.52106 15.1532 7.16123 15.3391 6.75704C15.525 6.35285 15.6225 5.91362 15.625 5.46872ZM10.9375 5.46872C10.9375 5.15969 11.0291 4.85759 11.2008 4.60064C11.3725 4.34369 11.6165 4.14342 11.9021 4.02516C12.1876 3.9069 12.5017 3.87595 12.8048 3.93624C13.1079 3.99653 13.3863 4.14535 13.6049 4.36387C13.8234 4.58239 13.9722 4.8608 14.0325 5.16389C14.0928 5.46699 14.0618 5.78115 13.9436 6.06666C13.8253 6.35217 13.625 6.5962 13.3681 6.76789C13.1111 6.93958 12.809 7.03122 12.5 7.03122C12.0856 7.03122 11.6882 6.8666 11.3951 6.57357C11.1021 6.28055 10.9375 5.88312 10.9375 5.46872Z"
                fill="#6781F7"
              />
              <path
                d="M8.59375 17.1875C8.59669 16.6634 8.46779 16.147 8.21891 15.6858C7.97003 15.2246 7.60915 14.8334 7.16949 14.5482C6.72983 14.263 6.22551 14.093 5.70291 14.0537C5.18032 14.0144 4.65624 14.1072 4.17891 14.3236C3.70157 14.5399 3.2863 14.8728 2.9713 15.2916C2.6563 15.7104 2.4517 16.2018 2.3763 16.7204C2.30091 17.239 2.35716 17.7682 2.53987 18.2594C2.72258 18.7506 3.02588 19.1879 3.42188 19.5312L3.25781 19.664C2.96771 19.9545 2.73766 20.2992 2.58082 20.6786C2.42399 21.0579 2.34343 21.4645 2.34375 21.875C2.34375 22.0822 2.42606 22.2809 2.57257 22.4274C2.71909 22.5739 2.9178 22.6562 3.125 22.6562C3.3322 22.6562 3.53092 22.5739 3.67743 22.4274C3.82394 22.2809 3.90625 22.0822 3.90625 21.875C3.90625 21.4606 4.07087 21.0631 4.3639 20.7701C4.65692 20.4771 5.05435 20.3125 5.46875 20.3125C5.88315 20.3125 6.28058 20.4771 6.57361 20.7701C6.86663 21.0631 7.03125 21.4606 7.03125 21.875C7.03125 22.0822 7.11356 22.2809 7.26007 22.4274C7.40659 22.5739 7.6053 22.6562 7.8125 22.6562C8.0197 22.6562 8.21841 22.5739 8.36493 22.4274C8.51144 22.2809 8.59375 22.0822 8.59375 21.875C8.59124 21.4301 8.49376 20.9908 8.30783 20.5866C8.12191 20.1825 7.85181 19.8226 7.51563 19.5312C7.85181 19.2398 8.12191 18.88 8.30783 18.4758C8.49376 18.0716 8.59124 17.6324 8.59375 17.1875ZM5.46875 15.625C5.77778 15.625 6.07988 15.7166 6.33683 15.8883C6.59378 16.06 6.79405 16.304 6.91231 16.5895C7.03057 16.875 7.06152 17.1892 7.00123 17.4923C6.94094 17.7954 6.79212 18.0738 6.57361 18.2923C6.35509 18.5108 6.07667 18.6597 5.77358 18.7199C5.47048 18.7802 5.15632 18.7493 4.87081 18.631C4.5853 18.5128 4.34127 18.3125 4.16958 18.0556C3.99789 17.7986 3.90625 17.4965 3.90625 17.1875C3.90625 16.7731 4.07087 16.3756 4.3639 16.0826C4.65692 15.7896 5.05435 15.625 5.46875 15.625Z"
                fill="#6781F7"
              />
              <path
                d="M21.5781 19.5313C22.0595 19.114 22.4018 18.5596 22.5593 17.9423C22.7167 17.3251 22.6818 16.6744 22.4591 16.0776C22.2364 15.4807 21.8367 14.9662 21.3134 14.6029C20.7901 14.2396 20.1683 14.0449 19.5312 14.0449C18.8942 14.0449 18.2724 14.2396 17.7491 14.6029C17.2258 14.9662 16.8261 15.4807 16.6034 16.0776C16.3807 16.6744 16.3458 17.3251 16.5032 17.9423C16.6607 18.5596 17.003 19.114 17.4844 19.5313C17.1482 19.8227 16.8781 20.1825 16.6922 20.5867C16.5062 20.9909 16.4088 21.4301 16.4062 21.875C16.4062 22.0822 16.4886 22.2809 16.6351 22.4274C16.7816 22.574 16.9803 22.6563 17.1875 22.6563C17.3947 22.6563 17.5934 22.574 17.7399 22.4274C17.8864 22.2809 17.9688 22.0822 17.9688 21.875C17.9688 21.4606 18.1334 21.0632 18.4264 20.7702C18.7194 20.4771 19.1168 20.3125 19.5312 20.3125C19.9457 20.3125 20.3431 20.4771 20.6361 20.7702C20.9291 21.0632 21.0938 21.4606 21.0938 21.875C21.0938 22.0822 21.1761 22.2809 21.3226 22.4274C21.4691 22.574 21.6678 22.6563 21.875 22.6563C22.0822 22.6563 22.2809 22.574 22.4274 22.4274C22.5739 22.2809 22.6562 22.0822 22.6562 21.875C22.6537 21.4301 22.5563 20.9909 22.3703 20.5867C22.1844 20.1825 21.9143 19.8227 21.5781 19.5313ZM17.9688 17.1875C17.9688 16.8785 18.0604 16.5764 18.2321 16.3194C18.4038 16.0625 18.6478 15.8622 18.9333 15.744C19.2188 15.6257 19.533 15.5947 19.8361 15.655C20.1392 15.7153 20.4176 15.8641 20.6361 16.0827C20.8546 16.3012 21.0034 16.5796 21.0637 16.8827C21.124 17.1858 21.0931 17.4999 20.9748 17.7855C20.8566 18.071 20.6563 18.315 20.3993 18.4867C20.1424 18.6584 19.8403 18.75 19.5312 18.75C19.1168 18.75 18.7194 18.5854 18.4264 18.2924C18.1334 17.9993 17.9688 17.6019 17.9688 17.1875Z"
                fill="#6781F7"
              />
              <path
                d="M14.0625 16.4062H13.2812V12.5C13.2812 12.2928 13.1989 12.0941 13.0524 11.9476C12.9059 11.8011 12.7072 11.7188 12.5 11.7188C12.2928 11.7188 12.0941 11.8011 11.9476 11.9476C11.8011 12.0941 11.7187 12.2928 11.7187 12.5V16.4062H10.9375C10.7303 16.4062 10.5316 16.4886 10.3851 16.6351C10.2386 16.7816 10.1562 16.9803 10.1562 17.1875C10.1562 17.3947 10.2386 17.5934 10.3851 17.7399C10.5316 17.8864 10.7303 17.9688 10.9375 17.9688H14.0625C14.2697 17.9688 14.4684 17.8864 14.6149 17.7399C14.7614 17.5934 14.8437 17.3947 14.8437 17.1875C14.8437 16.9803 14.7614 16.7816 14.6149 16.6351C14.4684 16.4886 14.2697 16.4062 14.0625 16.4062Z"
                fill="#6781F7"
              />
            </svg>

            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.8125 21.0938H5.46875V7.03125H20.3125C20.5197 7.03125 20.7184 6.94894 20.8649 6.80243C21.0114 6.65591 21.0938 6.4572 21.0938 6.25C21.0938 6.0428 21.0114 5.84409 20.8649 5.69757C20.7184 5.55106 20.5197 5.46875 20.3125 5.46875H19.5312V3.125C19.5312 2.9178 19.4489 2.71909 19.3024 2.57257C19.1559 2.42606 18.9572 2.34375 18.75 2.34375H6.25C6.0428 2.34375 5.84409 2.42606 5.69757 2.57257C5.55106 2.71909 5.46875 2.9178 5.46875 3.125V5.46875H4.6875C4.4803 5.46875 4.28159 5.55106 4.13507 5.69757C3.98856 5.84409 3.90625 6.0428 3.90625 6.25V21.875C3.90625 22.0822 3.98856 22.2809 4.13507 22.4274C4.28159 22.5739 4.4803 22.6562 4.6875 22.6562H7.8125C8.0197 22.6562 8.21841 22.5739 8.36493 22.4274C8.51144 22.2809 8.59375 22.0822 8.59375 21.875C8.59375 21.6678 8.51144 21.4691 8.36493 21.3226C8.21841 21.1761 8.0197 21.0938 7.8125 21.0938ZM7.03125 3.90625H17.9688V5.46875H7.03125V3.90625Z"
                fill="#8B97AE"
              />
              <path
                d="M20.3125 8.59375C20.1053 8.59375 19.9066 8.67606 19.7601 8.82257C19.6136 8.96909 19.5312 9.1678 19.5312 9.375V21.0938H14.8438V17.1875C14.8438 16.9803 14.7614 16.7816 14.6149 16.6351C14.4684 16.4886 14.2697 16.4062 14.0625 16.4062H10.9375C10.7303 16.4062 10.5316 16.4886 10.3851 16.6351C10.2386 16.7816 10.1562 16.9803 10.1562 17.1875V21.875C10.1562 22.0822 10.2386 22.2809 10.3851 22.4274C10.5316 22.5739 10.7303 22.6562 10.9375 22.6562C11.1447 22.6562 11.3434 22.5739 11.4899 22.4274C11.6364 22.2809 11.7188 22.0822 11.7188 21.875V17.9688H13.2812V21.875C13.2812 22.0822 13.3636 22.2809 13.5101 22.4274C13.6566 22.5739 13.8553 22.6562 14.0625 22.6562H20.3125C20.5197 22.6562 20.7184 22.5739 20.8649 22.4274C21.0114 22.2809 21.0938 22.0822 21.0938 21.875V9.375C21.0938 9.1678 21.0114 8.96909 20.8649 8.82257C20.7184 8.67606 20.5197 8.59375 20.3125 8.59375Z"
                fill="#8B97AE"
              />
              <path
                d="M17.1875 8.59375H7.8125C7.6053 8.59375 7.40659 8.67606 7.26007 8.82257C7.11356 8.96909 7.03125 9.1678 7.03125 9.375C7.03125 9.5822 7.11356 9.78091 7.26007 9.92743C7.40659 10.0739 7.6053 10.1562 7.8125 10.1562H17.1875C17.3947 10.1562 17.5934 10.0739 17.7399 9.92743C17.8864 9.78091 17.9688 9.5822 17.9688 9.375C17.9688 9.1678 17.8864 8.96909 17.7399 8.82257C17.5934 8.67606 17.3947 8.59375 17.1875 8.59375Z"
                fill="#8B97AE"
              />
              <path
                d="M17.1875 11.7188H7.8125C7.6053 11.7188 7.40659 11.8011 7.26007 11.9476C7.11356 12.0941 7.03125 12.2928 7.03125 12.5C7.03125 12.7072 7.11356 12.9059 7.26007 13.0524C7.40659 13.1989 7.6053 13.2812 7.8125 13.2812H17.1875C17.3947 13.2812 17.5934 13.1989 17.7399 13.0524C17.8864 12.9059 17.9688 12.7072 17.9688 12.5C17.9688 12.2928 17.8864 12.0941 17.7399 11.9476C17.5934 11.8011 17.3947 11.7188 17.1875 11.7188Z"
                fill="#8B97AE"
              />
            </svg>

            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7422 11.8517L16.2422 8.8517C15.8536 6.48819 14.7397 4.304 13.0547 2.6017C12.9821 2.52847 12.8957 2.47035 12.8005 2.43069C12.7052 2.39103 12.6031 2.37061 12.5 2.37061C12.3969 2.37061 12.2948 2.39103 12.1995 2.43069C12.1043 2.47035 12.0179 2.52847 11.9453 2.6017C10.2603 4.304 9.14636 6.48819 8.75781 8.8517L4.25781 11.8517C4.15034 11.9225 4.06202 12.0187 4.00069 12.1318C3.93936 12.2449 3.90692 12.3715 3.90625 12.5001V15.6251C3.90625 15.8323 3.98856 16.031 4.13507 16.1776C4.28159 16.3241 4.4803 16.4064 4.6875 16.4064H6.25C6.4572 16.4064 6.65591 16.3241 6.80243 16.1776C6.94894 16.031 7.03125 15.8323 7.03125 15.6251C7.03125 15.4179 6.94894 15.2192 6.80243 15.0727C6.65591 14.9262 6.4572 14.8439 6.25 14.8439H5.46875V12.922L8.59375 10.8361V15.6251C8.59375 15.8323 8.67606 16.031 8.82257 16.1776C8.96909 16.3241 9.1678 16.4064 9.375 16.4064H15.625C15.8322 16.4064 16.0309 16.3241 16.1774 16.1776C16.3239 16.031 16.4062 15.8323 16.4062 15.6251V10.8361L19.5312 12.922V14.8439H18.75C18.5428 14.8439 18.3441 14.9262 18.1976 15.0727C18.0511 15.2192 17.9688 15.4179 17.9688 15.6251C17.9688 15.8323 18.0511 16.031 18.1976 16.1776C18.3441 16.3241 18.5428 16.4064 18.75 16.4064H20.3125C20.5197 16.4064 20.7184 16.3241 20.8649 16.1776C21.0114 16.031 21.0938 15.8323 21.0938 15.6251V12.5001C21.0931 12.3715 21.0606 12.2449 20.9993 12.1318C20.938 12.0187 20.8497 11.9225 20.7422 11.8517ZM14.8438 14.8439H10.1562V10.672C10.1608 8.33231 10.9908 6.06926 12.5 4.28138C14.0092 6.06926 14.8392 8.33231 14.8438 10.672V14.8439Z"
                fill="#8B97AE"
              />
              <path
                d="M15.6251 17.9688C15.4179 17.9688 15.2192 18.0511 15.0726 18.1976C14.9261 18.3441 14.8438 18.5428 14.8438 18.75C14.8438 18.9572 14.9261 19.1559 15.0726 19.3024C15.2192 19.4489 15.4179 19.5312 15.6251 19.5312C16.11 19.531 16.583 19.6811 16.979 19.961C17.3749 20.2408 17.6744 20.6366 17.836 21.0938H7.16414C7.32576 20.6366 7.6252 20.2408 8.02118 19.961C8.41716 19.6811 8.89019 19.531 9.37507 19.5312C9.58227 19.5312 9.78099 19.4489 9.9275 19.3024C10.074 19.1559 10.1563 18.9572 10.1563 18.75C10.1563 18.5428 10.074 18.3441 9.9275 18.1976C9.78099 18.0511 9.58227 17.9688 9.37507 17.9688C8.33907 17.9688 7.3455 18.3803 6.61294 19.1129C5.88037 19.8454 5.46882 20.839 5.46882 21.875C5.46823 21.9778 5.48794 22.0797 5.52682 22.1749C5.56569 22.2701 5.62298 22.3567 5.69539 22.4297C5.8451 22.5724 6.04322 22.6534 6.25007 22.6562H18.7501C18.9573 22.6562 19.156 22.5739 19.3025 22.4274C19.449 22.2809 19.5313 22.0822 19.5313 21.875C19.5313 20.839 19.1198 19.8454 18.3872 19.1129C17.6546 18.3803 16.6611 17.9688 15.6251 17.9688Z"
                fill="#8B97AE"
              />
            </svg>

            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.75 2.34375C17.9774 2.34375 17.2222 2.57285 16.5798 3.00207C15.9374 3.4313 15.4368 4.04137 15.1411 4.75514C14.8454 5.46892 14.7681 6.25433 14.9188 7.01207C15.0695 7.76981 15.4416 8.46584 15.9879 9.01214C16.5342 9.55843 17.2302 9.93047 17.9879 10.0812C18.7457 10.2319 19.5311 10.1546 20.2449 9.8589C20.9586 9.56325 21.5687 9.06258 21.9979 8.4202C22.4272 7.77782 22.6563 7.02258 22.6563 6.25C22.655 5.21437 22.2431 4.22151 21.5108 3.48921C20.7785 2.75691 19.7856 2.34497 18.75 2.34375ZM18.75 8.59375C18.2865 8.59375 17.8333 8.45629 17.4479 8.19876C17.0625 7.94122 16.7621 7.57518 16.5847 7.14691C16.4073 6.71865 16.3609 6.2474 16.4513 5.79276C16.5417 5.33811 16.7649 4.9205 17.0927 4.59272C17.4205 4.26494 17.8381 4.04172 18.2928 3.95128C18.7474 3.86085 19.2187 3.90726 19.6469 4.08466C20.0752 4.26205 20.4412 4.56245 20.6988 4.94788C20.9563 5.33331 21.0938 5.78645 21.0938 6.25C21.0931 6.87139 20.8459 7.46714 20.4065 7.90653C19.9671 8.34592 19.3714 8.59307 18.75 8.59375Z"
                fill="#8B97AE"
              />
              <path
                d="M20.3123 11.7188C20.1051 11.7188 19.9064 11.8011 19.7599 11.9476C19.6134 12.0941 19.5311 12.2928 19.5311 12.5V20.3125C19.5309 20.5196 19.4485 20.7183 19.302 20.8647C19.1556 21.0112 18.957 21.0936 18.7498 21.0938H4.68732C4.48012 21.0938 4.28141 21.0114 4.1349 20.8649C3.98838 20.7184 3.90607 20.5197 3.90607 20.3125V6.25C3.90634 6.04288 3.98874 5.84432 4.13519 5.69787C4.28165 5.55141 4.48021 5.46902 4.68732 5.46875H12.4998C12.707 5.46875 12.9057 5.38644 13.0522 5.23993C13.1988 5.09341 13.2811 4.8947 13.2811 4.6875C13.2811 4.4803 13.1988 4.28159 13.0522 4.13507C12.9057 3.98856 12.707 3.90625 12.4998 3.90625H4.68732C4.06593 3.90693 3.47019 4.15408 3.0308 4.59347C2.59141 5.03286 2.34426 5.62861 2.34358 6.25V20.3125C2.34274 20.6204 2.403 20.9254 2.52086 21.2099C2.63872 21.4943 2.81185 21.7525 3.03022 21.9696C3.47065 22.4077 4.0661 22.6545 4.68732 22.6562H18.7498C19.3712 22.6556 19.967 22.4084 20.4063 21.969C20.8457 21.5296 21.0929 20.9339 21.0936 20.3125V12.5C21.0936 12.2928 21.0113 12.0941 20.8647 11.9476C20.7182 11.8011 20.5195 11.7188 20.3123 11.7188Z"
                fill="#8B97AE"
              />
            </svg>
          </div>
          <div className="sidebar__text">
            <p>Дашборд</p>
            <p>Биржа активности</p>
            <p>Биржа блогеров</p>
            <p>Взаимопиар</p>
            <p>Моя структура</p>
            <p>Магазин</p>
            <p>Марафон</p>
            <p>Лендинги</p>
          </div>
        </div>
        </div>  
    )
}

export default Sidebar;