-- npx supabase db resetを実行したときに、このシーダーも実行される

-- ユーザーデータの作成
-- この書き方でSupabaseにユーザーデータを入れられる
WITH credentials(id, mail, pass) AS (
  -- 5人のユーザーのUUID、メールアドレス、パスワードをここに記載します。
  SELECT * FROM (VALUES 
    ('123e4567-e89b-12d3-a456-426614174000', 'user1@example.com', 'password1'),
    ('123e4567-e89b-12d3-a456-426614174001', 'user2@example.com', 'password2'),
    ('123e4567-e89b-12d3-a456-426614174002', 'user3@example.com', 'password3'),
    ('123e4567-e89b-12d3-a456-426614174003', 'user4@example.com', 'password4'),
    ('123e4567-e89b-12d3-a456-426614174004', 'user5@example.com', 'password5')
  ) AS users(id, mail, pass)
),
create_user AS (
  INSERT INTO auth.users (id, instance_id, ROLE, aud, email, raw_app_meta_data, raw_user_meta_data, is_super_admin, encrypted_password, created_at, updated_at, last_sign_in_at, email_confirmed_at, confirmation_sent_at, confirmation_token, recovery_token, email_change_token_new, email_change)
    SELECT id::uuid, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', mail, '{"provider":"email","providers":["email"]}', '{}', FALSE, crypt(pass, gen_salt('bf')), NOW(), NOW(), NOW(), NOW(), NOW(), '', '', '', '' FROM credentials
  RETURNING id
)
INSERT INTO auth.identities (id, provider_id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
  SELECT gen_random_uuid(), id, id, json_build_object('sub', id), 'email', NOW(), NOW(), NOW() FROM create_user;

-- メモデータの作成
INSERT INTO memos (title, content, user_id) VALUES
('買い物リスト', '牛乳、卵、パン、野菜を買うこと。', '123e4567-e89b-12d3-a456-426614174000'),
('会議のメモ', '来週月曜10時にチーム会議。資料を準備すること。', '123e4567-e89b-12d3-a456-426614174000'),
('本のリスト', '読みたい本:1. 君たちはどう生きるか 2. ノルウェイの森', '123e4567-e89b-12d3-a456-426614174000'),
('レシピのメモ', '簡単なカレーの作り方: 玉ねぎ、にんじん、じゃがいもを炒めてルーを加える。', '123e4567-e89b-12d3-a456-426614174000'),
('映画の感想', '「スラムダンク」感動した！特に最後の試合シーンが最高だった。', '123e4567-e89b-12d3-a456-426614174000'),
('旅行の計画', '沖縄旅行: 美ら海水族館、国際通り、古宇利島に行きたい。', '123e4567-e89b-12d3-a456-426614174000'),
('健康メモ', '毎朝ストレッチを10分、週3回ジョギングをする。', '123e4567-e89b-12d3-a456-426614174000'),
('仕事のアイデア', '新プロジェクトでAIを活用した提案を考える。', '123e4567-e89b-12d3-a456-426614174000'),
('読書メモ', '「嫌われる勇気」を読み直す。アドラー心理学をもう一度整理する。', '123e4567-e89b-12d3-a456-426614174000'),
('家事リスト', '1. 洗濯 2. 掃除機をかける 3. ゴミ出し（燃えるゴミ）', '123e4567-e89b-12d3-a456-426614174000');

