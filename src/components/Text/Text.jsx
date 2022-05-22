import './Text.scss';

export const Text = ({ title = 'NONE', x = 10, y = 10, fill = '#fff', fontSize = '60px' }) => (
    <text x={x} y={y} fill={fill} fontSize={fontSize}>
        {title}
    </text>
);
