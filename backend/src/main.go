package main

import (
	"go-gin-project/controllers"
	"go-gin-project/initializers"
	"go-gin-project/models"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	initializers.ConnectToDB().AutoMigrate(&models.Todo{})

	// 全件取得
	router.GET("/todos", controllers.GetTodoList)
	// 作成
	router.POST("/todos", controllers.AddTodo)
	// 更新
	router.PATCH("/todos/:id", controllers.UpdateTodo)
	// 削除
	router.DELETE("/todos/:id", controllers.DeleteTodo)

	router.Run(":8000")
}
