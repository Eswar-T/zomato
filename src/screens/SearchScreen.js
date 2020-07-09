import React,{useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import SearchBar from './components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from './components/ResultList'

const SearchScreen = () => {
   const { term,setTerm }  = useState('')
   const [ searchApi, results, errorMessage ] = useResults();
   
   const filterResultsByPrice = (price) => {
       return results.filter( result => {
                 return result.restaurant.price_range === price
       })
   }

   return(
         <>
         <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(setTerm) }/>    
         { errorMessage ?  <Text>Search screen</Text> : null  }
         <Text>We have found { results.length } results</Text>
         <ScrollView>
         <ResultsList results={filterResultsByPrice(2)} title="cost Effective"/>
         <ResultsList results={filterResultsByPrice(3)} title="Bit pricier"/>
         <ResultsList results={filterResultsByPrice(4)} title="Big spender"/>
         </ScrollView>
        </>
    )
}

export default SearchScreen;