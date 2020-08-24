import styled from 'styled-components';

const switchCover = bookId => {
    let coverUrl = '';
    switch(bookId){
        case 0:
            coverUrl = `data:image/jpeg;base64,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`;
            break;
        case 1:
            coverUrl = `https://images-na.ssl-images-amazon.com/images/I/819aEjaXniL.jpg`;
            break;
        case 2:
            coverUrl = `https://images-na.ssl-images-amazon.com/images/I/717Ux9fzBbL.jpg`;
            break;
        case 3:
            coverUrl = `https://images-na.ssl-images-amazon.com/images/I/71bC5EE7ZmL.jpg`;
            break;
        case 4:
            coverUrl = `https://images-na.ssl-images-amazon.com/images/I/51fCyI4gc7L._SX342_BO1,204,203,200_.jpg`;
            break;
        case 5:
            coverUrl = `https://images-na.ssl-images-amazon.com/images/I/81ECmpRQZPL.jpg`;
            break;
        default:
            coverUrl = `https://www.analyticdesign.com/wp-content/uploads/2018/07/unnamed.gif`;
            break;
    }
    console.log(coverUrl);
    return coverUrl;
}

export const OverView = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    margin-left: 150px;
    margin-top: 5px;
    border: 2px solid black;
    width: 880px;
`

export const BookData = styled.div`
    display: flex;
    flex-direction: column;
`

export const RowDiv = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    width: 800px;
    border-bottom: ${props => props.bottomRow ? 'none' : '1px solid black'};
    /* padding-left: 15px; */
`

export const FieldNameDiv = styled.div`
    padding: 0px 10px;
    width: 80px;
    border-right: 1px solid black;
    background-color: orange;
`

export const FieldName = styled.h1`
    font-size: 20px;
    margin: 15px 0px;
    text-align: center;
`

export const ContentDiv= styled.div`
    width: 320px;
    border-right: 1px solid black;
`

export const Content = styled.p`
    padding-left: 15px;
    font-size: 15px;
    margin-top: 20px;
`

export const BookCover = styled.div`
    /* background-color: orange; */
    width: 80px;
    border-left: 1px solid black;
    background: ${props => `url(${switchCover(props.id)}) no repeat center center`};
    background-size: cover;
`