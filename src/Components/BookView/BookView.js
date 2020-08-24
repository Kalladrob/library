import React, { Component } from 'react';
import { OverView,
         BookData,
         RowDiv,
         FieldNameDiv,
         FieldName,
         ContentDiv,
         Content,
         BookCover } from './BookViewStyled';

class BookView extends Component {

    determineStatus = () => {
        let newStatus = '';
        switch (this.props.status){
            case 0:
                newStatus = 'Lido';
                break;
            case 1:
                newStatus = 'Quero Ler'
                break;
            case 2:
                newStatus = 'Abandonei'
                break;
            default:
                newStatus = 'ERRO!!!'
                break;
        }
        return newStatus;
    }

    render = () => {
        return(
            <>
                <OverView>
                    <BookData>
                        <RowDiv>
                            <FieldNameDiv>
                                <FieldName>Título</FieldName>
                            </FieldNameDiv>
                            <ContentDiv>
                                <Content>{this.props.title}</Content>
                            </ContentDiv><FieldNameDiv>
                                <FieldName>Autor</FieldName>
                            </FieldNameDiv>
                            <ContentDiv>
                                <Content>{this.props.author}</Content>
                            </ContentDiv>
                        </RowDiv>
                        <RowDiv bottomRow>
                            <FieldNameDiv>
                                <FieldName>Gênero</FieldName>
                            </FieldNameDiv>
                            <ContentDiv>
                                <Content>{this.props.genre}</Content>
                            </ContentDiv>
                            <FieldNameDiv>
                                <FieldName>Status</FieldName>
                            </FieldNameDiv>
                            <ContentDiv>
                                <Content>{this.determineStatus()}</Content>
                            </ContentDiv>
                        </RowDiv>
                    </BookData>
                    <BookCover id={this.props.id}/>
                </OverView>
            </>
        )
    }

}
export default BookView;