import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Image, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import { styles } from './home';

const Home = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0)
        setCount(count - 1);
    };



    return (

        <SafeAreaView >

            <TouchableOpacity style={styles.btnhead} activeOpacity={0.5}>
                <Image source={require('../../assets/images/btn.head.png')} style={styles.btnhead}/>
            </TouchableOpacity>


            <ScrollView>

            <View style={styles.oneShoe}>
            <Image source={require('../../assets/images/blackcarrosel.jpg')} style={styles.imgShoe}/>
                <Text style={styles.shoeName}> Adidas Black </Text>
                <Text style={styles.shoePrice}> R$ 250,00 </Text>
            <View style={styles.contador}>
            <TouchableOpacity onPress={increment} style={styles.btnhead} activeOpacity={0.5}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity onPress={decrement} style={styles.btnhead} activeOpacity={0.5}>
                <Text style={styles.menos}>-</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.adicionar} activeOpacity={0.5}>
                <Text style={styles.txtadicionar}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.oneShoe}>
            <Image source={require('../../assets/images/caramelcarrosel.jpg')} style={styles.imgShoe}/>
            <Text style={styles.shoeName}>Adidas Caramel</Text>
            <Text style={styles.shoePrice}>R$ 342,00</Text>
            <View style={styles.contador}>
            <TouchableOpacity onPress={increment} style={styles.btnhead} activeOpacity={0.5}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity onPress={decrement} style={styles.btnhead} activeOpacity={0.5}>
                <Text style={styles.menos}>-</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.adicionar} activeOpacity={0.5}>
                <Text style={styles.txtadicionar}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.oneShoe}>
            <Image source={require('../../assets/images/graycarrosel.jpg')} style={styles.imgShoe}/>
            <Text style={styles.shoeName}>Adidas Gray</Text>
            <Text style={styles.shoePrice}>R$ 546,00</Text>
            <View style={styles.contador}>
            <TouchableOpacity onPress={increment} style={styles.btnhead} activeOpacity={0.5}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity onPress={decrement} style={styles.btnhead} activeOpacity={0.5}>
                <Text style={styles.menos}>-</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.adicionar} activeOpacity={0.5}>
                <Text style={styles.txtadicionar}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.oneShoe}>
            <Image source={require('../../assets/images/yellowcarrosel.jpg')} style={styles.imgShoe}/>
            <Text style={styles.shoeName}>Adidas Yellow</Text>
            <Text style={styles.shoePrice}>R$ 556,00</Text>
            <View style={styles.contador}>
            <TouchableOpacity onPress={increment} style={styles.btnhead} activeOpacity={0.5}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity onPress={decrement} style={styles.btnhead} activeOpacity={0.5}>
                <Text style={styles.menos}>-</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.adicionar} activeOpacity={0.5}>
                <Text style={styles.txtadicionar}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btnhead} activeOpacity={0.5}>
            </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;