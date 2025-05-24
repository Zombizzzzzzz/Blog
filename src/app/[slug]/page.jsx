import styles from "./singlepage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textCont}>
          <h1 className={styles.title}>loem amda afasdcascas das sada</h1>
          <div className={styles.author}>
            <div className={styles.authorImageCont}>
              <Image src="/p1.jpeg" alt="" fill className={styles.userImage} />
            </div>
            <div className={styles.userinfo}>
              <span className={styles.username}>Siddhant </span>
              <span className={styles.date}>1.1.2008 </span>
            </div>
          </div>
        </div>
        <div className={styles.imageCont}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.dsec}>
            <p>
              The "Out of video memory trying to allocate a rendering resource"
              error in Unreal Engine 5 (UE5) typically means that your GPU
              (graphics card) ran out of available VRAM (video RAM) while trying
              to load or render something in the editor or game. 🔍 Common
              Causes Project is too large for your GPU VRAM – High-res textures,
              large landscapes, complex shaders, etc. Running at high editor
              settings or resolution – Using ultra-quality settings in the
              editor. Background processes using GPU – Other programs (e.g.,
              Chrome, OBS, or even Discord) may be using VRAM. Driver Issues –
              Outdated or corrupted GPU drivers. UE5 Bug or Leak – Rare but
              possible if you're using a preview or custom engine build.
            </p>
            <p>
              The "Out of video memory trying to allocate a rendering resource"
              error in Unreal Engine 5 (UE5) typically means that your GPU
              (graphics card) ran out of available VRAM (video RAM) while trying
              to load or render something in the editor or game. 🔍 Common
              Causes Project is too large for your GPU VRAM – High-res textures,
              large landscapes, complex shaders, etc. Running at high editor
              settings or resolution – Using ultra-quality settings in the
              editor. Background processes using GPU – Other programs (e.g.,
              Chrome, OBS, or even Discord) may be using VRAM. Driver Issues –
              Outdated or corrupted GPU drivers. UE5 Bug or Leak – Rare but
              possible if you're using a preview or custom engine build.
            </p>
            <h2>Joeee</h2>
            <p>
              The "Out of video memory trying to allocate a rendering resource"
              error in Unreal Engine 5 (UE5) typically means that your GPU
              (graphics card) ran out of available VRAM (video RAM) while trying
              to load or render something in the editor or game. 🔍 Common
              Causes Project is too large for your GPU VRAM – High-res textures,
              large landscapes, complex shaders, etc. Running at high editor
              settings or resolution – Using ultra-quality settings in the
              editor. Background processes using GPU – Other programs (e.g.,
              Chrome, OBS, or even Discord) may be using VRAM. Driver Issues –
              Outdated or corrupted GPU drivers. UE5 Bug or Leak – Rare but
              possible if you're using a preview or custom engine build.
            </p>
          </div>
        <div className={styles.comments}>
          <Comments/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
