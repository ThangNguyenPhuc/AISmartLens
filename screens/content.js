import React from "react";
import { ScrollView } from "react-native";
import {StyleSheet, View, Text} from 'react-native';




export default function Content(){
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>READING</Text>
            <Text>-Bạn hãy làm quen với việc đọc tiếng Anh qua việc đọc các bài báo bằng tiếng Anh: VNExpress, The Guardian, The Economist, Vox,…</Text>
            <Text>-Bạn hãy tra cứu những từ vựng mới và ghi chép lại để có thể sử dụng được nó</Text>
            <Text>-Bạn hãy tập làm quen việc đọc sách được viết bằng Tiếng Anh, vì nó vô cùng cần thiết trong quá trình học Đại Học cũng như công việc sau này của bạn</Text>

            <Text style={styles.title}>LISTENING</Text>
            <Text>-Bạn hãy làm quen với việc nghe tiếng Anh mỗi ngày</Text>
            
            <Text>-Để cải thiện kỹ năng nghe tiếng Anh, chúng ta có 2 cách: nghe chủ động và nghe thụ động</Text>

            <Text>+ Nghe chủ động là khi bạn tập trung lắng nghe tiếng Anh để hiểu được nó, và đồng thời đặt ra những câu hỏi, và đưa ra những quan điểm cá nhân về vấn đề đang được bàn luận</Text>
            

            <Text>+ Nghe thụ động là khi bạn không đặt sự chú ý vào nó và có thể kết hợp thực hiện đồng thời với nhiều việc khác.</Text>
            <Text>-Bạn hãy dành ra một khoản thời gian ngắn mỗi ngày để nghe những podcasts, hoặc những video trên Youtube về những vấn đề mà bạn thích để cải thiện kỹ năng nghe tiếng Anh nhé!</Text>
            <Text>-Khi bạn làm bài tập về nhà, hãy thực hiện nghe thụ động bằng cách bật những podcasts, hay video trên Youtube nào bạn thích và để nó làm nền</Text>
            <Text>-Bạn hãy biến việc nghe podcasts tiếng Anh thành một thói quen, vì nó vừa cải thiện kỹ năng nghe của bạn, vừa tăng thêm kiến thức xã hội để áp dụng vào kỹ năng viết và nói nữa.</Text>
            <Text style={styles.title}>WRITING</Text>
            <Text>-Để có thể cải thiện kỹ năng viết, bạn hãy đọc và học theo cách viết của những báo nổi tiếng của người bản xứ như: The Guardian, The Economist, Vox,....</Text>
            <Text>-Bài viết IELTS writing task 2 cũng như một bài nghị luận xã hội vậy. Vì thế, bên cạnh việc sử dụng được ngôn ngữ, hãy trang bị thật nhiều kiến thức xã hội để chinh phục nó nhé!</Text>
            <Text style={styles.title}>SPEAKING</Text>
            <Text>Để nâng cao kỹ năng nói, bạn có thể vừa học vừa giải trí qua phim ảnh. Khi xem phim, bạn hãy học theo những cách nói của những diễn viên và tập luyện hàng ngày.</Text>
            <Text>Đừng ngần ngại khi có cơ hội được giao tiếp bằng tiếng Anh. Khi gặp những người bản xứ, bạn hãy xin phép họ ít phút để giao tiếp và trao đổi với họ để trau dồi kỹ năng nói của bản thân</Text>
            <Text>Yếu tố quan trọng nhất để thông thạo kỹ năng giao tiếp bằng tiếng Anh chính là môi trường. Bạn hãy cùng bạn bè tạo một môi trường giao tiếp bằng tiếng Anh, và cùng góp ý lẫn nhau để cùng nhau phát triển nhé!</Text>

            <View style={{height:50}}></View>            
        </ScrollView>
    );

}


const styles = StyleSheet.create({
    container: {
        backgroundColor:"white"
    },
    row: {
        flexDirection: "row",
        marginTop:100
    },
    card: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        borderWidth: 1,
        borderRadius: 20,
        width: "80%",
        height:"30%",
        marginTop:50,
    },

    title:{
        fontSize: 25,
        fontWeight: "500",
        marginTop: 25
    },

    textInputStyle: {
        borderBottomWidth: 1,
        width: "80%",
        height: 45,
        paddingLeft:10
    },
    logo: {
        height: 100,
        width: 100,
        marginTop: 50
    },

    icon: {
        height: 80, 
        width: 80,
    },
    subtext: {
        marginTop: 25,
        fontSize: 20,
        fontWeight: "600"
    }
});