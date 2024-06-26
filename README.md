> **Notes on Custom Fork**
>
> with Max Lynch now having left the Ionic Team, the `ionic-team/trapeze` GitHub project now appears to be abandoned.
> this fork is _not_ an attempt at permanently taking over project maintenance, it is simply an intermediate space that
> will hopefully as somewhere to collate and distribute bug fixes.
>
> some nominal functional improvements and possible new features may be implemented in this fork, but only insofar as my
> own personal usage of the included packages. other contributions are welcome, but due to limited time and
> resources on my part, I cannot guarantee regular and steady maintenance.

---

<div align="center">
  <a href="https://trapeze.dev" target="_blank"><img src="https://github.com/ionic-team/trapeze/raw/main/logo.png" alt="Trapeze Logo" width="512" /></a>
</div>

<p align="center">
  🤸‍♀️ Easy automated project configuration for iOS, Android, Capacitor, React Native, Flutter, and more 🤸‍♀️
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@trapezedev/configure"><img src="https://img.shields.io/npm/v/@trapezedev/configure?label=@trapezedev/configure" /></a>
  <a href="https://www.npmjs.com/package/@trapezedev/project"><img src="https://img.shields.io/npm/v/@trapezedev/project?label=@trapezedev/project" /></a>
</p>

---

because of the structure of this workspace, you will need to use something like Vercel's
[`gitpkg` service](https://gitpkg.vercel.app/about/) to install packages directly from this repository.

for the `@trapezedev/configure` CLI tool from the `main` branch:

```shell
npm install https://gitpkg.now.sh/ZaLiTHkA/trapeze/packages/configure?main'
```

for the `@trapezedev/project` API package from the `main` branch:

```shell
npm install 'https://gitpkg.now.sh/ZaLiTHkA/trapeze/packages/project?main'
```

---

Trapeze is a mobile project configuration toolbox for native iOS and Android project management. From a simple YAML format, Trapeze makes it easy to automate the configuration of native mobile iOS and Android projects, and supports traditional native, [Ionic](https://ionicframework.com/), [Capacitor](https://capacitorjs.com/), React Native, Flutter, and .NET MAUI. The long-term goal of Trapeze is to enable fully immutable native mobile projects.

Trapeze works by automating the modification of pbxproj, plist, XML, Gradle, JSON, resource, properties, and other files in iOS and Android app projects. It features a configuration-driven tool that takes a YAML file with iOS and Android project modifications and performs those modifications from the command line interactively.

For example, modifying your project is as easy as writing a configuration file:

```yaml
platforms:
  ios:
    targets:
      App:
        bundleId: $BUNDLE_ID
        version: $VERSION

  android:
    packageName: com.example.app
    versionName: $VERSION_NAME
    versionCode: $VERSION_CODE
```

Each one of these variables can be supplied from the environment or interactively when running the command. There are <a href="https://trapeze.dev/docs/operations/getting-started">many more configuration options</a> available.

A Project API is also available for writing custom JavaScript/TypeScript project modification scripts for full control. The configuration tool uses this API under the hood.

See [trapeze.dev](https://trapeze.dev) for full documentation and to get started using Trapeze.

__Note: this project was formerly known as `capacitor-configure` but has now been expanded to support other mobile frameworks and renamed to Trapeze as of June 2022__

