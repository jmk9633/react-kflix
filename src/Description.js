
/**
 * 이거슨 제목과 설명을 뿌려주는 컴포넌트여
 * @param {string} title
 * @param {string} description
 * @param {any} descriptionStyle
 * @returns 
 */

export default function Description({title, description,descriptionStyle}){
    return (
        <>
            <h1>{title}</h1>
            <p style={descriptionStyle}>{description}</p>
        </>
    )
}