CREATE TABLE `todos` (
	`id` serial PRIMARY KEY,
	`user_id` bigint unsigned NOT NULL,
	`title` varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial PRIMARY KEY,
	`name` varchar(50) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password_hash` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `email_unique` UNIQUE INDEX(`email`)
);
--> statement-breakpoint
ALTER TABLE `todos` ADD CONSTRAINT `todos_user_id_users_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);