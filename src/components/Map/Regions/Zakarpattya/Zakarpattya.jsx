import { useSelectRegion } from '../../../../hooks/useSelectRegion';
import { useRegionColor, useDistrictColor } from '../../../../hooks/useRegionColor';

import { Uzhgorodsky, UzhgorodskyName } from './District/Uzhgorodsky';
import { Mukachevskiy, MukachevskiyName } from './District/Mukachevskiy';
import { Khustskiy, KhustskiyName } from './District/Khustskiy';
import { Beregivsky, BeregivskyName } from './District/Beregivsky';
import { Tyachivsky, TyachivskyName } from './District/Tyachivsky';
import { Rakhovsky, RakhovskyName } from './District/Rakhovsky';
import {
    BLUE,
    DISTRICT_STROKE,
    DISTRICT_STROKE_WIDTH,
    REGION_STROKE,
    REGION_STROKE_WIDTH,
} from '../../../../variables';
import { Mines } from '../../../Mines/Mines';
import { useMinesInfo } from '../../../../hooks/useMinesInfo';
import { Text } from '../../../Text/Text';

export const Zakarpattya = () => {
    const regionZakarpattya = useSelectRegion('Закарпатська область');
    const regionUzhgorodsky = useSelectRegion('Закарпатська область', 'Ужгородський район');
    const regionBeregivsky = useSelectRegion('Закарпатська область', 'Берегівський район');
    const regionTyachivsky = useSelectRegion('Закарпатська область', 'Тячівський район');
    const regionKhustskiy = useSelectRegion('Закарпатська область', 'Хустський район');
    const regionRakhovsky = useSelectRegion('Закарпатська область', 'Рахівський район');
    const regionMukachevskiy = useSelectRegion('Закарпатська область', 'Мукачівський район');
    const { day, total } = useMinesInfo('Закарпатська');
    return (
        <>
            {/* MAP REGIONS */}
            <g
                fill={useRegionColor(regionZakarpattya)}
                stroke={DISTRICT_STROKE}
                strokeWidth={DISTRICT_STROKE_WIDTH}
                fillOpacity="1">
                <Uzhgorodsky color={useDistrictColor(regionUzhgorodsky)} />
                <Mukachevskiy color={useDistrictColor(regionMukachevskiy)} />
                <Khustskiy color={useDistrictColor(regionKhustskiy)} />
                <Beregivsky color={useDistrictColor(regionBeregivsky)} />
                <Tyachivsky color={useDistrictColor(regionTyachivsky)} />
                <Rakhovsky color={useDistrictColor(regionRakhovsky)} />
            </g>
            {/* Contur */}
            <g
                fillRule="evenodd"
                stroke={REGION_STROKE}
                strokeLinecap="square"
                strokeLinejoin="bevel"
                strokeOpacity="1"
                strokeWidth={REGION_STROKE_WIDTH}>
                <path d="m663.66 2005.7-.49093-.1613-2.6302.2902-1.0125.8226-1.431.9354-.29939.3388-.65835-.064-.59396.8387-2.3533.4516-.84668.6774-.73722-.016-.5328-.4354-.59716.2741-.70986-.258-.058-1.3871-.23663-.6451-1.0463-1.4032-.42011-.1291-.81127-.9192-1.9412-.9195-.29295-.8871-1.0833-1.0483-.87888-.065-.50221.3547-2.5883.2097-.88852-.7419-2.1296-.5322-1.2217-.9031-.1642.8224-.61326 1.1291-.39598.2903-1.3183-.8872-1.4084.048-.76297.5001-.55211.9516-1.1541.5322-.98027-.2902-1.299-1.0324-.55373-.2741-.53762.2257-1.505-.129-2.1521.4192-1.1606-.4515-.89818-1.7259-.54729-1.2742-1.101-1.6289-.51508-1.4355.0676-.629-.11593-1.4355-1.0382-.258-2.6189-2.1129-2.0523-1.1935-1.2104-.4679-.88208-.6774-1.1928-1.7257-.65191-.258-1.101-.048-.56659.2903-1.4986-.1775-1.9445.484-1.9493 1.0322-.8161.081-.45392-.4999-.45714-1.3226-1.233-1.7741-2.2358-2.1775-1.703-1.4193-.72595-.2098-.77746.4518-1.0076 1.3387-.866.5967-1.7915.1773-.52153.3549-1.4857.4677-.81286-.4354.34606-1.0485-.11592-.8386-.74687-.9032-.71951-.1775-1.2201.7904-.77424 1.1935-.79678.2097-.83379-.4354-.51348-.6936-.82413.1934-1.0189.4195-.61166.4677-.27364.6129.0161 1.6129-.8 2.0644-1.0881 1.2903-1.1107.4194-1.5275-.629-1.2282.5645-.72596.5968-1.6563.1129-1.1815-.5968-2.8281.5484-3.0583 1.3387-.75975-.048-1.0366-.629-1.5324.9354-.32515.8548-2.0974 2.4516-.97545.5806-1.5356-.5161-1.1461-1.0644-.70824-1.1935-1.0688-.2904-.98833-1.0967-1.2137-3.0322-.7179-.5324-.37505-.8063.006-.5645-.49737-.2258-.45392-.7581-.0902-2.0645.42816-1.8387-.81609-.5484-.60523-.7419-2.2664-1.4355-.42495-.4677-.10787-.7097.92875-.7097-.13685-.8226-.39759-.6129-1.3972-.1129-.90462-.3872-2.5271-.7581-.82897-.1129-1.4954.1935-.98187-.4839-.57627-.7097-1.4294-1.3225-1.3473-.9999-1.5533-.7259-2.0684 1.1129-1.1509.2742-.48449-.1935-.11915-.7904-.74366-.5967-1.2394.5644-1.3312-.3225-1.0157.5968-1.3569.2257-.86117-.032-.59557.2904-.85956-.3709-1.072.258-.37988.629-.30421 1.1129-.62134.4355-.42655-.1129-.68411-1.887-.5521-.3227-2.363.8387-.98509.6775-1.1509.2258-1.0028.7742-.52797.1935-3.4124.371-.98189.7741-1.0656.1774-1.9364-1.4516-1.0962-.4838-1.6596-.4677-1.0302-.8226-.35734-1.6935-.42334-.871-.94808-.9838-1.6145-.9839-.91267-.1291-1.365.3711-.76458-.2904-1.1187-1.8548h-1.4583l-1.431.6935-1.2201.113-1.9976-.7742-1.1622.7258-.51347.8549-.73884.2418-1.5919-.5322-.73883.1452-1.7239.8064-.7179-.097-.93843-.4839-2.041-1.4354-1.2555-.4517-1.2153.064-1.4487-.4031-1.4245-2.6936-.82737-.871-.82574-.4354-.27526 1.3064-.58911 1.5485.18671.3547-.20764 1.0485-.0451 1.758-.6326.5161-.40401 1.0967-.13202 2.1129-.40242.6452-.66317.3709-.91428 1.7097-.36217 1.0645-1.0141 1.258-.84506.7097-.38793 1.2257-.26076 1.5162.536.6613-1.043 1.2903-1.2459.097-.65995.2741-1.2282-.5484-.23823-.5967-2.0217-1.0161h-.90785l-.58752-.3226-.77263.1613-1.0205-.2097-1.7143.1613-1.0784-.6129-2.0716-.3388-.92394-1.9998-1.2072-.2097-1.3505-.4838.19316-.5163-.9513-2.4354-.75815.5484-.83701.1613-1.2169-.097-.28973.4517-1.233.4354-1.5034-1.2257-.49094.032-.7501-.6935-.51187-.1452-.87725-1.2581.48289-1.5484-1.093-.8708-1.1944.1934-1.7046-1.3869-1.0575-.032-1.5565.4677-.70341-.1775.24146-1.3226-.90623-1.1773-1.1445-.3871h-.70986l-.80964-.7096-.23019-.6452h-1.3312l-.99959-1.2419-.18672-.6935-1.0946-.6129-1.4857.9031-1.2185.1291-1.1509-1.3065-.60362.3709-.89335-2.2257.45875-.4193-.1594-.4839.33481-.7743-.0193-.8869.39275-.3388 1.7094-.7741-1.2845-1.0485-.56017-.097-1.3956 1.0162-.56176-.3871-.54729-1.4192-.76458-.5163-.81608-.9192-.96901-.4195-.70341.5647-1.4358.2418-.499.3549-.63581-.8065-1.7062-.129-1.6982-1.1451.0547-1.0485-.9529-.1934-.23341-.5968-.9674-1.4032-.0934-.4677-.64708-.3872.003-1.0645 1.3312-.8871.31066-.4838-.0402-.9356.78551-1.7418h1.0028l.65674-.6936-.20121-.7581-1.0752-.4838-.54246-.9515-1.3006-1.7097-2.4016-.8065-.4507-.3709-.20281-.742.0966-1.4677-.24788-1.9355-.0773-1.8064-.22534-.065-.89335-.2257-.55051.1613-1.4905-.2257-1.0768.097-.0821.5-1.3505 3.016-1.204-.9031-1.2169.4031-.47.5-1.3473-.4838-1.5968-.048-1.4133-.4032-.64547.097-2.1907-.6774-.86761.016-.97383-.4354-1.1155.2097.0451-.4033-2.1537-.1613.12236-.7904-.84344-.758-.32837-.7097.72755-.3386-.3525-1.6291.42494-.1775-.5328-1.0967-1.2088-.1452-.10143-2.1128-1.0833-.9355-.80642-.1291-.58752.871-1.4133-.9032-.27847 1.9032-2.2905.2742-.25432.6129-.58108-.1775-.72917.3388-1.2153 5.1451-1.5066.9354-.43138 1.0646-.71146-.6129-1.6048.2096-.82252 1.3548-2.2728.7904-1.2636 1.5484 2.2535 1.5805.30583.2097-.47644 1.2419.40401.4839-.69376.5967-.72273-.2902-1.1235 2.8224-.58591-.048-1.1123 1.0161-.16257 1.3871 1.0736.6613-.4153 1.6934.86117 1.2581-.68731 1.1773-3.0664 2.8549.75491 1.2903 2.1682 1.0322-.0113 1.1775-.9368 1.9355-.62616.4999-.50704 1.2581-1.0157.9353-1.2539.597-.12075.6128-.64708.4677.10143 1.1451 1.9638.2743-.70341.6451-.71468 1.6451.14007.7258-.39758 1.0322-.38793.2743-1.7255.064-1.3425-1.1451-.96578-.3549-2.3581.3226-2.297 1.7096-6.9327 1.1935-.61167 1.2097-.86598 1.113-.2318 1.0483-1.1895.064-.66479.4516-.39598-.4516-.59718.4516-.67121-1.3387-1.3054-.6775-2.4869-.1613.0789-.6613-.36378-1.3709-.94648-.7581-1.476-.3388.10143-.5484-2.6463-.5967.23019-1.2258-4.029-.629-.35572 1.5968-2.7284-2.1452-.22375.3709-1.6563-1.2903.0129-.5483-4.2302-.9193-1.5694 1.7742.0902 1.516-.25593 1.2098-.27204.4031.58592.8549.12075.7419 1.7336 1.1936 1.394.097.81125 1.516.65191 2.8065-.0741 1.5323.91428 3.7257-.18027.9677.38953 1.1451.96579.9355-1.4648.6774-.0837.6452-.96578.097-1.0608.9031-1.2797.8871h-1.1541l-.25754-.4515-1.0865.4031-.12558.7743-1.7111-.2904.0354-.7418-.72757-.081-.029 1.1613-1.0302-.9356-.19155 1.0001-.50703.1774-.61166-.4839-.14007 1.258-1.3103.2259-.37826-.2259.47646-.7579-1.1622.064.13203-1.9838.25593-.7741-.57786-1.5323-1.072.6936-.72113-.4355-.5022.7097-.68409.4677-.41208-.2097.33803-1.0806-.63903-.1452-.0853-.4677-.98511.6936.10305-.742-.65191-1.3871.53761-.5483-.13363-.5645-.56982-.1775-.46197-.6774-.65029.3386-.008.7742-.65996-.3547-.97223-1.4839-.86116-.032-.98189-.4677-.34767-.6935-.5167.1129-.91428-.371-1.5694.5967.1996-.9515.71468-.5968-.61648-.6128-.96259-1.3387-.19798-.6452 1.9992-2.7903.54405.3065.59879-.2743-.5682-1.3225.88852-.2741.29456-.6774 1.4342-1.855 2.2986-1.2903-.22858-.8225-.0531-3.0645 1.1187-.2741 1.0253-.8226-.0725-.5484.62131-.8065.87727-2.1934.60844-1.0485.26076-7.2741-1.175.2097-1.1348-.5483-.15617 1.0644-.71628.6129-.90784-1.2258-.44106-.1129-.91265-1.1774.77744-.3063-.40401-1.6775.0725-.4516-.6149-.3386-.10787-.8388.4185-.4031-.69858-.5001.77102-.5484-.65191-.6451.49256-.5968-.8-.5645.0274-.5483-.50866-.7097-1.0881-.3388-.55693-.5322-.55854-1.0967-1.1139.129-.46358.9677-.52152.5645-1.0672-.5323.0242-.9999.70824-.3872-1.043-1.1451-.36699-.8065.10626-1.4032.20443-.2741-1.2716-.1452-.48451-.8549.27203-.6774-.31387-1.1612.10143-.5645.69055-1.3548.13524-1.4838-.38148-1.3387-.76941-1.4839-1.2072-.8064-.88369-.097-.84989.2903-1.0286 1.0322-.37827.8065-.002 1.7903-.92877.8387-.93197-.064-.4829-1.1774.0725-.8387.42333-1.0322.62777-1.0162.19799-1.129-.31229-.5322-1.138-.5161-.72112.097-1.1815 1.7257-.39917.3225-1.1493-.032-2.1086-1.516-1.7191-.3871-.7662.3387-.16418.742.36056.8386.64707.4517 1.1042 1.1935-.59555.9999-1.0624.5001-1.4116-.1774-.60363-.355-.71629-.8385-.46197-1.0646-.0515-.9032-.31227-.7742-.72112-.371-.93037-.048-1.8398 1.0322-.78551-.016-1.3714-.6935-.58591-.048-.74365.8387-.37343.9031-.55534.3066-1.4696-.3066-.62132.032-1.1686 1.3387-.74206.4517-1.7867.113-.79838.6935-.94325 1.3387-1.7127 1.4032-2.0442 1.1935-.92072.8711-.79517 1.0644-.91105.6774-.82254.1613-2.033-.2258-2.1328-1.2903-1.5018.242-1.9718-.3388-2.0475.032-.67121-.2257-1.3392-1.3064-.60199-.9678-.75655-.7742-.56498-.1452-.38792-.629-1.0913.387-.51348.4032-.85311.097-2.3276-.3387-1.0463-1.0646-1.1911-.2902-.80483.1291.5167-2.2743.87243-.7097.99636-.4515-.92553-1.3226-.8821-1.6773.14974-3.371.54405-.4354.058-.7903-1.6257-1.3549-.24468-1.1935 1.2909-.9517.92233.1775.44104-.5968-1.6869-2.8064-.77584.4838-.79999-1.2419-.8-2.0805-1.3183.5645-.74527-.4356-.68087-2.8386-.84668-2.0322-.59879-.629-.17062-1.2097-.49095-.3388.31066-.758-1.1364-1.0322.17866-1.2258 1.7465-.1774.77746-2.0807-.15618-1.7419-.18349-.5483-3.7875-.9194.0644-.258-3.1726-3.4839-2.2052-.9676-1.2298.4031-.35411-1.1289-.81127-.984-.84668-.4515-.0596-.9678-.47001-.9032-1.2298-.9678-1.0849-1.2903-.0805-1.3871.77907-1.4353-.4829-.6129.43621-1.2419-3.2434-.484-1.5469-.129 1.4133-1.7742.26077-.5322-.93199-.4999.53601-.742-3.3078-1.7257-1.6145.2579-.24145.5645-.70985.5645-.55373-.064-1.2088.5806-1.2217 1.8225-1.1026.016-1.9364.7903-.37666-.7903-1.0575-.1291-.30261.2581-.95775-.5967-.70502-1.0646-1.093-1.1129-.85311.081-1.1718-1.0001-.61167.629.59235 1.5646-3.5203-.8065.13041-.7097-5.0398.6452-1.0817 1.4032-.60524 1.6936-1.8945.9677-.45714.6935-.21731 1.1613-4.0434-4.3386.37505-.5-1.2217-2.3387-.1594-.9193.0837-.8549-1.5984-3.4677-2.4-2.629-.38631.3226-2.8169-3.0967.57786-1.4839-.94969-3.0483.0419-.8871.74527-1.258-.66157-2.1291.13686-.629-.47968-1.4678.0145-.6611-1.2668-.3388-.8515-.4999.0209-.5968-.89337-.081-1.1477-1.5161-.58269-.4516.24466-.7903-.21246-.3548.18832-.9033-1.0189-.516-.62294-.6936-.11753-.8549.87725-1.0483 1.072-3.4355-.71951-2.2257-.0515-.4839.68893-1.7419-.56659-1.1774.0113-.5483-4.7678.2257-1.4133-1.0645-7.1372-1.887-1.4245-2.2097-.99638-1.7742-1.2024-2.9192-.91267-1.1614-.97383-.7902-1.0254-.5324-.87082-1.0805.56983-.6936 2.6189-.7258.8193-.4516.82093-1.1451 1.1187-2.1613.97222-3.0322-.13363-.8548-1.4648-.4516-2.9666.2418-1.5227.355-.6857-.016-1.6821-.5161-1.5292-.9678-.45553-.4838-1.6853-2.2258-1.0608-1.6935-1.0028-.4516-1.3231.016-1.5694.7258-1.8608 1.3385-1.4084 1.4517-1.5179.8871-1.5211.3548-1.4374.032-2.2116.5-1.5598.8549-.53924.6935-.0483 2-.74849-.242-2.0813.1613-.73883-.8548.24144-2.2257-.40081-.1936-.7678-1.129-.28489-1.5646.15134-.8869.0403-1.7421.63098-1.3548-.70019-1.6773 1.0173-7.9516.49898-3.2257 3.0342-19.387-.45873-1.371.64064-.8708.71629-4.8065.71307-16.096 2.7444-8.0806.84506-1.516 2.437-4.387.76619-.1452.43944-.742.17223-.8548-.19316-.6613.47003-.6129 1.233.3388.96579-.065 1.307-.8064 1.3827-2.4839.35413-.2903 1.5517-1.2581 3.7843.2904.25432-.6774 2.5288-2.1775 2.4016-4.7096.0193-2.3064.17061-.871 1.3569-.3709 2.6141-1.9354-.0757-.7258 1.0286.016 3.5428-2.6451 1.8543-1.9032-.0531-.6774.4507-.5323 1.2974-.5322 1.5018-1.0162.29778-.4193.01-.8549 1.2008-.1773.70665-.8064 1.7561-.4034.55373-.6933 1.7835-.5647.87565.2097.94003-.097.969-.4031 1.0205-.065 1.6113-5.887-.0322-2.9192 2.1505-4.7903-.79517-1.0001 1.6595-2.1289.83863-.2097.44265-1.629-.0869-1.1775-.2656-.8708-.008-1.2903.46841-.5968-.55211-.7258-1.645-.5484-.7485-1.4839-.2704-.9194-1.2909-.081-.57626-.7096.2672-1.2259.42656-1.1612.15779-2.6774-.13847-.9354.42979-.5806.78551-1.613.44587-.2902 1.1251-.048.45231-.2259 1.1525-2.0968 1.0704-.9031 1.8624-.7903.0805-.3388.24627-.887.6857-1.1774-.2688-.7097.50382-.6935.25915-1.0807.47162-.7418 1.6354-.984-.0547-.9999-.49738-2.4517.20121-1.3224-.52796-5.5-.52153-.4838-1.5356-3.3387.0596-.9678 1.0012-.9677-.20442-.9032.27042-1.7258.49095-4.2418-.22375-.613.0225-1.0322.41528-.8226.18028-1.1774.84506-1.8548 1.1026-.4677.9336-1 .0628-1.516 6.5287-2.5806.47968-.4356.11592-2.0645.2672-4.7418-.48934-.7903.71146-.4355.0531-1.4355.38792-.629-.14007-.8065.37504-1.016.97223-1.1291.49898-.887-.0966-1.0646-1.2926-.9999-.26718-.7259-.0966-1.2741.88852-.9515 10.041-16.613.87725-.5484 1.196-.3386.41046-.4517.0193-1.2581.45714-1.9031-.0274-2.8388.63098-.6772 1.8125-.1452 1.0044-.3549.70503-.8225.52957-.9033 1.4551-.4677 1.3135-.1613 2.2245 1.3387 1.8382-.048 1.6145-1.7096 1.1106-.7742 2.6672-.8871.93038-.4516.0724-.7581-1.5742-4.0322-.27686-1.3065 1.4648-.6451 1.1042-.9193.89336-1.9999.0467-10.435.11432-4.9353.41046-4.5163.41689.097 2.0604-.7258.79354-1.0644.0306-1.7419.70341-.371.22695-.6291 1.0076-.5645 1.1976-.9676.49256-.7581.80964-.4838.52958.016 1.8897.9193.98348.1613 1.1847.4516.67767 1.4193.19315.984.51026 1.2257 2.165.1452.53924.7097.80483.484 1.9525.3548.80483 1.2419.64707.5967.35573 1.1451-.21408.4034.602 1.258.008.7742.37505.2418.68893 1.9516.44909.6936 1.204.7097.45231.081.29941 1.1774 1.0929 1.1774.0886.4517.82093.4031 1.3794 1.0968.80644-.3709 1.6579.1613.56659 1.5321-.0209.4033.9191.6129 1.3779.3548.0628.4193.8354.2097.84024-.3386.61811-.9678 1.4744-1.3387 1.2732-1.7258 4.074-.7096.87082-.5161 1.6837.6129.84829 1.2096 2.0877-.3225.91911.3548 1.3666 1.1128 1.241.048.87725 1.0001.78067-.065 1.3537-1.7581.44586-1.9355.98511-.5806 1.0382.5484.96257.1452 1.3038.9516 2.1811 1.2097.31066.5967.95773.742 1.0189 1.4677 1.3956 1.1613 2.4788.8065.0548 1.4353.44104.6935.47968 1.6937 1.6933.1934.80483.6774.44587.097 1.0881-.887 1.4068-.4517.54727 1.4516.70341.4839.57303 1.3064.52314 2 .48612.6613.11109.9194-.21408.3709-.0225 1.3225.90784.984 1.3006-.2743 1.9428.4516 1.0897-.2902 1.0704-.032.45231-.5 1.3151.081 1.2169-.4354.97384-.5161.65674.242 1.0865-.3065 1.328.8064.97223-.2742.58269 1.4355 1.9879 2.7742 1.6644 2.1289.31388 1.8549.94003 1.2258-.25272 1.129-.53761.6612.87725 2.7581-.86599 1.2419-.9513.6613-1.7722-.242-.87243-1.2903-.52958-.1129-.59074.4356-.66638 1.0644-.63261.4354-.81769.1775-.77907.4677-.79998.871-.97384.2418-1.901 1.5646-.1851.8387.36377 1.0483-.0322 2.1452-.3847.4516.23017 1.7741.81769 1.3387.12237 1.1453.31387.9838 1.5372 2.1451.65996.5323-.006.4515.32515.7742.7356 2.7258.2173 1.7258 1.0688 1.7097.8193.6452.18833.6613 1.2233 1.1289 1.2201.5645 1.9316 1.7096.99959.3711.95613.9515 1.3312.871.34286.8549 2.6849 1.4998.62776-.3225 1.5082.7259.10627.5967.62292.6129 1.5066.9838 1.9686.3388 1.3795.758.60685.5968-.36218 1.0967.45714 1.129-.13203 2.6129.44587 1-.0966 2.0805.18028.7258-.0885.9033.57142 1.4194.12397.7581.65352.5483.97383 1.4515.6342.3872.76297 1.0321.82735.097.79839.4839.86117.8871 1.1525.7904 1.0076-1.4678.65513.1291 1.1799-1.0324.0934-.9999.32354-1.0001 1.3231-1.6934.96901-.9032 1.0688.5645h.99477l2.8362-1.6291 1.4567-.3225 1.7094.4032 1.1203 1.1935.62293.1129 1.3537-1.9193.78551-.6935 1.0028-.5161 1.7175.6935.64386-.4999 1.6225-.1775.33642-1.3064-.0451-.5484.9175-.8387 1.9622-.5484.86276.258 1.0592 1.5162 1.5533.4515 1.1734.032.72918.9678 1.035.032.89818 1.4033.91589-.1129.69858-.7259.48772.4677.2833 1.1451.70503 1.4355-.30905.7097-.84185 1.0324-.11914.7417.53761 1.6453.01.5645 3.1308.2903 1.0543.5484.53763.048.49093.5.31551.758 1.1782 1.1774.99798 1.6289.4346 1.1774.93199.742.44748.8871.0934 1.8064.57625.8549 1.4873.8549-.0386.9031.37987 1.2096-.0934.7581.0757 2.4677 1.2507 2.1613 1.2974 1.6289.33642 1.1453.68731 1.3387-.0644 1.3064.84667 1.9677.77102 1.4999.0692.9355.51026.7581.49256.2741 2.3211-.3386 1.3602.1934 2.2503-1.1451 1.666 1.0162 2.4096.9193 1.2475-.4516h.73884l.92555-.9355.5682-.258 1.6064.7904 2.2294-.355 1.2362-1.7257 1.2362-.016.52797-.4356.44748-3.1128.35896-.3064.97705-.1129 1.1541.8548 1.6177 2.5 1.4406.7258.98994 1.2903.61167.5.63742.048.71629.4999.97706 1.3549.17383 1.2257 2.2342.032 1.9815-.6129 1.8495-.7097.62776-.9838 1.4567-.9516 1.4551-.7742.50703-1.3871.93038-1.1936.78229-.3063 1.9139 2.0482.61651 1.4032.71951 1.1774.46197 3.0001-.12719.9838.23983 1.3064.42172.871.76619.7258h1.1332l1.6434 1.0161.97706 2.2742.45714.3386h.86278l1.0978-.2902 1.4616-.8549 1.5598 1.3871.76619.2741.85151.629.433.048.56659.113 1.3263 1.3225 1.1879.242 2.173.048 1.4455-.129 1.0414.1936.47161-.1775 1.0817.629 2.1778.1936.35896.5484.0885 1.016.90784.6452.66962-.7097 1.2893-.5806 1.1155.065 1.6595-.4193.64547.1291.10465-.5808 1.0237-1.2097.78389-.2902.91107-1.2742 1.4825-1.2096.87243-.5162.89013.4517.29617.7258.76621.6613.81125.2902.68731.7742 2.1698.8065 1.0302.2418.97062.5806 1.7175-.7901 1.3779.5483 1.8608-.4515 1.7288.3224.97061-.1774 1.6869.6613 2.5384 1.9354.86438-.1452.96257.3711.29616.4838.0837 1.8387.77263.8871-.0757 1.2742.5489.5483.76458.048 1.4454-.387.96258.6774.82736.2096 1.0962-1.0645.78873.3548 1.3843-.3709 1.1026.8549 1.1654 1.1935.95612 1.3387-.63097 1.5967.93199 1.1452.0692.8709-.6165 1.8548 1.0028.5645.69215.1936.4185.7419 1.5453.742.84827.871.7179 1.1935 1.1058.3386.27847.629.30583 1.4355.83702.5484.77424-.2903.55694.2257.91749.8226.32032 1.5646 1.1268 1.258.43782.7902.13525.9517.38148 1.0967 1.1477 1.4516 1.645.8711.92877.3547 1.8527 1.8387.79194.3549.49899-.1775 1.4374.3387.99797-.3548 1.336.1291.31388.3547.87725-.3386 1.0125.081.64547-.4195.46358-.7903 1.1766-1.0645.20926-.9192 1.0511-.242.37183.2742 1.0366.081 1.0817.7258 2.7316-.7742.74205.8549.19958.629.75333.4677 1.6064-1.0161.35573.048.83862.7904 1.4213.2257 1.4052 1.5323.49093 1.1935.56659.5483-.0209.6936-.83701.629.42011 1.371-.26398.5483.0531.8549.39758.7581-.63259.5967-.12075 1.629-.95451.2097-.58914.387-.38631 1.1292.24627 1.1451-.20121.6935.78873.7581.22696.7097 1.6064.6774-.14329.7579-1.1831 1.4839-.0596.7742.33641.7097 1.1622 1.4033.60843.097.83702.871.38953 1.1935.0563.7258 1.13-.1775 1.3505.6936.90784.8065.75171-.048 1.0752-.8548 1.3038.8386 1.1654.5645.53761 1.371-.73399 1.9838.90945.742 1.1106.5967 1.6274 2.0323 1.0109.4515.76297.5645 2.474 1.0324.9674-.2098.51025-.5644.59878-.1775 2.0459.6774.97061.6129 1.4326-.629.85954.2258.85633-.2904.98833-.9515 1.6612-1.0967.92072-1.1452.17223.5967.83218.9194.60845 1.5484 1.064.4839 2.3775.3709.80159.3387-.56337 2.0484-1.1557.8225-.83863.8065-.38148 1.758.0145.8871-.68572.5322-.13685 1.1774 1.3489 1.2096-.53761.9517 1.0044 1.6451-.5328.6935.35252 1.0485.84185 1.0322.0853 1.3387-1.608 1.2741-.52634 1.4355.48127.7097-.14168 1.8225.14812 1.5162.24145.8547-1.5678 1.7904.47645.5968-1.6113.8709-.15134 1.7097.40403 1.2258.058.7258.55533 1.2096 1.0479 1.1613.96578.4515.67121.8872.89657.6129 1.7239.242 1.4648.3708.67927.5 1.3038-.1773 1.5404 1.1128 1.3988.3387.48772-.048 1.2893.5324.74689-.2259 1.6579-1.4355 1.3296-.5161.92232-.9839-.12559-1.3547-1.0575-.9678-.62617-1.2742-.16417-.7258.44748-.6935 1.5436-.5807.37344-.6613.24627-1.1128 1.4471-2.2742.35252-1.0483.0741-1.3387.92231-1.1613.14491-1.1935 1.3585-.9678.65352-.6774.41528-.048.9336 1.0807.34286.048 1.9927-.6935 2.1183.1129.11432.5001 1.3988.9354.64063.1775.90623-.3871.4185-.6774.64708-.2742.18833-.8065.60684-1.2742.54888-.3225.59235-.8387.43784.1129 1.1171-.3872.63259-.4354.53923.1452 1.3183-.6452.28651-.4031 1.0575-.5485 1.1219.758 1.4503 1.2742.21409-.1613.41046-1.3547 1.5968-.8065.74525-.5322.17386-3.0001.84023.2259 1.4229.8387 1.3408-.3226.28167-.7742.86278-.6936.11914-.6451.87727-1.1774 1.0962-.4354.57625.3225 1.9992-.113 1.0768 1.3065.90945.3225-.0596 1.0483.37666 1.3226-1.5774 3.3548-1.043 1.0484-.23822 2.2096-.25434.6613-.56981.6129-.0499 1.0807-.99477.7257-.0322 1.0323.7018.9031.75009.5647 1.299.6772.7501 1.2259 1.9219 1.5967 1.2298 1.5484-.5006.8709-.7179.6451-1.4245 1.7743-.23501.8063-.59879.1614-.38148 1.0967.25432 2.4194-.0644.5806.70502.5-.36699.7903.57142.6775-.79195 1.1612 1.0173.8388.32676 1.4837-.67926.5324.32837.4677-.0274.7903.43621.9999.67606.984.86115-.065.84507.258 1.196.7097.0918.8065-.35733 1.0483-.16579 1.5161.14974.6452-.16418 1.0806.5328.9678-.66157.5967-.54568 3.1612.0177.4193 1.8092 1.5807 1.0881 1.2419.0966.5807-.74366 1.5322-.0386.7259.35411.8063.24789 1.3064 1.204 1.371.61971.4033.98349.1291.67928.4517.91588 2.0645.0435.4838.71629.4193.9207.2259 1.8012.1774-.40401 2.4193-.47163.8388.47324.9192 1.167.1452 1.2266-.8871.9014-.065 1.7481 1.0646 1.2958.081 1.3827-.629 2.2117 2.2095 1.2024.8872.95614.4999 2.3807-.629.66799-.4031.89498.048 1.5952.5967.0902.6613 1.5469 1.3869.38632.6613.89174.242.76297-.5806 2.2116-1.0645-.48773-.758.35091-1.0808-.33642-.7418.54085-.9839 1.1879-.9354.25273-.484-.44749-.7097.46841-1.403 1.5115-.7258.44426-.4679-.0145-.9354.34608-.629 1.0575-.3549.40563-.4838-.74526-1.6935-1.0076-1.4839-.32354-1.2258.97222-1.5807 1.1219-1.0644 1.4374.1936.84184-.048 1.5662.4354 2.3115 1.3548 1.0575.2743.83058 1.3385 1.175.2743 1.7014-.1936.90301.5001.39276.6613 1.1815.1773 1.0833.8549.23661.9517 1.2137-.113 1.328 1.3065.70664 1.0644.35572.9517-1.1573 1.2258-.0757.5967-.55051 1.4032.21409.5323-.34769.887.0403 1 .84988 1.1935.18993 1.0483.63261.742.64707.1936.68893.6613h1.4938l.99636-.2098 2.1924 1.9032 1.0446-.1452.42978 1.3386 1.0157.1613.1996.7581.37666.2742.0918 1.3708.30905.4195 1.2426.4677.7694-.6452h.5666l.38309.8227.67928.3224 1.2346.2904.45553-.2904.87566.097.32676.4518-.63903 1.2096.11914.7258.94647.9354.97061.3388.11754.5806.58108.6936.55051.3063.14651 1.5646.81608.7742 1.8785-.7742.52958.2741.0563.7903-.41691 1.4355.0998.6452.48771.1129.9175 1.2742.0145.2902 1.5952 1.3871 1.5115.3388.69214.4032.18672.8871-.35412.7741.20121.3226 1.1267.3064.42174.5001.70824-.016.1272.6128.57625.9032 1.0141.6612.25754.8227.90301.016.70985-.3548 1.1557 1.3226.54406.2257.19155 1.4355.2849.4515.0982 1.0647-.86921.9515.23018.9678.18994 2.0805-.58108 2.0806.36377.2904-.20442 1.4194-.52795.4031-.3992 1.7742.0596.7258.36861.8871 1.5469.048.89979.2902 1.0881.113 1.4584.5967.60362.4033 1.365.3709 2.2422.7743 1.6499 1.2741 1.1187 1.1774.39114.6129 1.1783.8065.41367.4031 1.0414 2.1775.98349 1.758-.47324.387-1.3118.5001-.94165.064-.9851.3871-.72594.871-1.0173 3.0805-1.0849.7742 1.2378 2-.65834.6129-.47806.9031-1.1654 1.4033-1.761.7419-.10143.9194.27847.4032-.19637.9515.24627.5485 1.3585.6774.20926.7902.44104.4356-.29939.7097-1.4084.2418-1.1284 1.0485-.57625.7579-.48771 1.3871-.56339.629-.48127.9194.4008.8065.55371 2.1612 2.5835 1.3387 1.8044 1.6291.88047.3709-.0596.5483.47807 1.5.41691.6775 1.2797.8226.095 1.6612.3654 1.1128-.80805 1.5968.095.3225 1.4632.355.94324.5967 1.2266.4838 1.4374.1291.70341.629.54729-.016 1.0946 2.0484.0789.7742-.44265.9676.49737 1.2419 2.6656.3711 1.9654.9676.19154.742 1.0237 1.0162 1.1525 1.7096.74043.5806 1.3585.3709.59718-.016.66318.8064-.0563.8065.73239.629.0998.9194.84023.8064.0531 1.4839.5006.5483.87243.3872.25433 1.516.82735.6774.46841.9356 1.027.7419.5682 1.2742-.0725.9515 1.1847 2.4515.005.6613.42816 1.5162-1.1493.6774-.39597.5484-1.6113 1.2257-.734 1.5807-.71629.4193-1.0849-.2902h-1.3923l-1.328 1.0483-.68087.9515-.27687.9355-.88691 1.7903-1.0688.6613-1.2233 1.1291-.39758.8709-1.13 1.7418-.25432.9194.13203.7581-.84024 2.1936.20441.9999.5843.9838-1.4921.871.19316.5806-.41369.871.18833.5-.42977 1.4194-.0628 1.4355.14007 1.2741-.56176 1.6451.0885 2.3065-.45714 1.129-1.5791 1.645-.21568 1.2742-1.0012 1.0324-.57464-.016-.15778-.5161-3.3545-.7742-1.5485.5161-1.0607-.3709-2.3871 1.9998-1.2153 1.113-.33318.7259-2.6688-.1452-.77263-.6291-1.2571-.6612-1.8688-.1936-.44587-.5484-1.2523-.9355-1.476-.6129-.93197-.7097-1.8946.5001-2.6511-.484-.9996.048-.92715-.4031-2.8813-2.4677-1.1106.387-.89337.5968-1.0205 1.0484-2.4692 2.0967-1.6048-.1452-1.6145 1.016-.63259.6613-.94808-.064-.97061.6613-.45231.5967-.0161 1.7259-.35091.7579-.73399.8226-.60362 1.371-.71147.4032-.1288.8226-.6004 1.5807.33803 2.4838-.0274.4031-2.4515 1.0001-.97865.2741-1.9992 1.4194-1.109.4677-.87726.7419-.88852.4517-1.4567.3225-1.5839-1.4193-1.0318.1774-1.8334-1.9677-.7694-1.2742-1.2604 1.0322-1.1123.1129-1.1654 1.0324-.60845.8708-1.4471.4838-.49739 1.0162-1.0785 1.2742-.95774.032-1.806.6451-1.4245.8388-.62776.629-1.2491-.2259-1.4584.032-.56337-.242"></path>
            </g>
            {/* ./MAP REGIONS */}

            {/* NAME REGIONS */}
            {!regionZakarpattya && regionUzhgorodsky && <UzhgorodskyName />}
            {!regionZakarpattya && regionMukachevskiy && <MukachevskiyName />}
            {!regionZakarpattya && regionKhustskiy && <KhustskiyName />}
            {!regionZakarpattya && regionBeregivsky && <BeregivskyName />}
            {!regionZakarpattya && regionTyachivsky && <TyachivskyName />}
            {!regionZakarpattya && regionRakhovsky && <RakhovskyName />}
            {/* ./NAME REGIONS */}

            {/* NAME GLOBAL REGIONS */}
            <Text title="Закарпатська" fill={regionZakarpattya ? '#fff' : BLUE} x="150" y="1800" />
            {/* ./NAME GLOBAL REGIONS */}

            {/* Mines */}
            <Mines x={270} y={1830} day={day} total={total} />
            {/* ./Mines */}
        </>
    );
};
