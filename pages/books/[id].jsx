const queries = require('../../db/queries/books')
import Layout from "../../src/components/DefaultLayout";
import BookTitleBar from "../../src/components/Bookview/BookTitleBar";
import BookTagList from "../../src/components/Bookview/BookTagList";
import BookDesc from "../../src/components/Bookview/BookDesc";
import useBookData from '../../src/hooks/useBookData';
//import BookReviewList from "../../src/components/Bookview/BookReviewList";
import UserContext from '../../src/UserContext'
import { useContext } from 'react'

const Bookview = ({ book }) => {

  const { userId } = useContext(UserContext)

  const { state } = useBookData(book, userId);

  return (
    <Layout>
      <BookTitleBar userId={userId} authors={book.authors} title={book.title} img={book.image_url} year={book.year} />
      <BookTagList tags={state.tags}/>
      <BookDesc desc={book.description} />
    </Layout>
  );
};

/*
  <BookReviewList />
*/

export async function getServerSideProps(context) {
  const queryId = context.params.id;

  // Fetch data from API
  const bookData = await queries.books.fetch(queryId)
  const book = bookData[0];

  // Pass data to the page via props
  return { props: { book } };
}

export default Bookview;
