# Cyber Space
Three.jsを用いたウェブゲーム、サイバー空間のシューティングゲーム
Reactも用いる、シングルプレイを想定する

## 技術スタック
- Three.js
- React

## ディレクトリ構成
/cyber-space
├── AGENTS.md (先ほど作成したルールファイル)
├── package.json
├── index.html
├── src
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── core
│   │   └── useGameStore.js      // ゲームの状態管理 (Zustand: スコア、HP、ゲームオーバー等)
│   ├── components
│   │   ├── GameCanvas.jsx       // Canvasとレンダリング設定
│   │   ├── CyberGrid.jsx        // 背景のネオングリッド・星
│   │   ├── Player.jsx           // 自機の移動、入力処理、射撃トリガー
│   │   ├── Enemies.jsx          // 敵のスポーン・移動管理
│   │   ├── Bullets.jsx          // 弾の移動・衝突判定 (Object Pool適用)
│   │   └── HUD.jsx              // スコア、HP、レティクルなどの2D UI (Tailwind)
│   └── utils
│       └── collision.js         // 3Dバウンディングボックスによる軽量な衝突判定

機能,実装アプローチ,パフォーマンス対策
状態管理,Zustandによるグローバル管理,描画ループ内でReactのState（useState）を更新するとCanvas全体が再レンダリングされ、フレームレートが大幅に低下します。Zustandの非反応的（Transient）なアップデートを使い、フレーム毎の更新は3D空間内で完結させます。
描画ループ,@react-three/fiber の useFrame,"useFrame(state, delta) を用い、すべての移動計算を delta (経過時間) 依存にすることで、ディスプレイのHzに関わらず一定の速度で動作させます。"
オブジェクトプール,弾（Bullets）の再利用,射撃のたびに新しいMesh（3Dモデル）を生成・破棄すると、メモリの確保・解放が頻発してカクつき（GCスパイク）の原因になります。あらかじめ固定個数（例: 最大100発）の配列を確保し、有効/無効フラグを切り替えて使い回します。
グラフィック,ネオン/サイバー表現,MeshBasicMaterial に color と toneMapped={false} を組み合わせ、ブルーム効果（発光）を最小限の負荷で表現します。
