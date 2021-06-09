package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

type User struct {
	Id    int    `json:"id"`
	Name  string `json:"name"`
	Jiage int    `json:"jiage"`
	Link  string `json:"link"`
}

func hande(c *gin.Context) {
	var user1 User
	user1.Id = 1
	user1.Name = "88元两条纯棉白色t恤短袖女夏韩版宽松大半袖上衣体恤衫打底衫"
	user1.Jiage = 49
	user1.Link = "https://s5.mogucdn.com/mlcdn/c45406/180413_0191kb917l8fali06l0i86ii2l93c_640x960.jpg_440x587.v1cAC.40.webp"

	var user2 User
	user2.Id = 2
	user2.Name = "春秋韩版2021新款修身显瘦U型美背内搭带胸垫小吊带背心女装"
	user2.Jiage = 19
	user2.Link = "https://s5.mogucdn.com/mlcdn/c45406/180413_0191kb917l8fali06l0i86ii2l93c_640x960.jpg_440x587.v1cAC.40.webp"

	c.Header("Access-Control-Allow-Origin", "*") /*解决跨域请求*/
	c.JSON(200, gin.H{
		"data": user1,
	})
}
func main() {
	fmt.Println("1111")
	r := gin.Default()

	r.GET("/shouye", hande)

	err := r.Run(":8090")
	if err != nil {
		fmt.Println("err=", err)
	}
}
