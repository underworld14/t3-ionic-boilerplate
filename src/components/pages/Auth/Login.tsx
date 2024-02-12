import { BaseLayout } from '~/components/layouts';

export default function Login() {
  return (
    <BaseLayout className="px-7">
      <div className="flex h-full w-full flex-col pb-14 pt-12">
        <h1 className="text-3xl font-bold">Selamat Datang!</h1>
        <h2 className="text-xl font-semibold text-primary">Utarakan.id</h2>

        <div className="flex w-full justify-center">
          <img
            src="/assets/illustrations/login-illustration-min.png"
            alt="login utarakan"
            width="400"
            height="400"
          />
        </div>

        <div className="-mt-10 text-lg">
          Hari gini masih pendam perasaan? <br />
          Utarakan aja sekarang!
        </div>
      </div>

      <form className="mt-8">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email kamu yang terdaftar" />
          {/* {#if $errors.email}
			<div class="error-message">{$errors.email}</div>
		{/if} */}
        </div>
        <div className="form-group mt-2">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Masukkan passwordmu" />
          {/* {#if $errors.password}
			<div className="error-message">{$errors.password}</div>
		{/if} */}
        </div>
        {/* <div className="mt-6">
		<Button type="submit" variant="primary" rounded>Masuk</Button>
	</div> */}
        <div className="mt-6 text-center">
          <a href="/auth/forgot-password" className="text-primary underline">
            Lupa Password?
          </a>
        </div>
        <div className="mt-4 text-center">
          Belum punya akun?{' '}
          <a href="/auth/register" className="text-primary underline">
            Daftar dulu
          </a>
        </div>
      </form>
    </BaseLayout>
  );
}
