<template>
  <v-row>
    <v-col>
      <h1 class="display-4 ma-5">
        How to create your own OpenGeode module
      </h1>

      <p :class="paragraph">
        This page explains how you can create a module that depends on OpenGeode,
        to develop your own features.
        The procedure is very simple and you can quickly get to work, with the tools that we provide
      </p>

      <h2 :class="section">
        What you need
      </h2>

      <p
        :class="paragraph"
      >
        The only thing you need is OpenGeode. Make sure OpenGeode is compiled and installed.
      </p>

      <h2 :class="section">
        First step - Create an OpenGeode module architecture
      </h2>

      <p :class="paragraph">
        The first step is to create your module architecture.
        We help you by providing a template for module architecture.
      </p>

      <ol :class="paragraph">
        <li>
          Go on our GitHub template repository for OpenGeode modules:
          <a
            href="https://github.com/Geode-solutions/OpenGeode-ModuleTemplate"
          >https://github.com/Geode-solutions/OpenGeode-ModuleTemplate</a>
        </li>
        <li>
          Click on
          <strong>Use this template</strong>.
          Il will allow you to create a repository from this template repository.
          Choose all the options you want, including ownership, repo name, public or private access.
        </li>
        <li>
          Finalize by clicking on
          <strong>Create repository from template</strong>.
        </li>
      </ol>

      <p :class="paragraph">
        You have created a repository.
        You can now clone it and go to the second step.
      </p>

      <h2 :class="section">
        Second step - Replace templated names by your own
      </h2>

      <p :class="paragraph">
        Have a quick look at your new repository.
        There are three folders: one for the headers of your libs, one for the sources,
        and the last for tests.
        There are also a few files.
        If you need information on these files, you can go to the last section
        `What are these files in module repository`.
        For now, open CMakeLists.txt in your favorite text editor or IDE.
      </p>

      <ol :class="paragraph">
        <li>
          Define the name of your module in place of
          <code>MyModule</code> in
          <code>project(MyModule CXX)</code>.
        </li>
        <li>
          Change the name of the option
          <code>MYMODULE_WITH_TESTS</code>, or
          remove this option if you do not want to make tests for your module (which is not a good idea!).
          Be careful this option appears twice in the file.
        </li>
        <li>
          Define the libraries in your module by adding one call to
          <code>add_geode_library</code> per library. Here are the basic parameters (for advanced parameters, see examples in OpenGeode code):
          <ul>
            <li>
              <code>NAME</code> the name of the library
            </li>
            <li>
              <code>FOLDER</code> the folder hierarchy where your files are located from MyModule/include and MyModule/src
            </li>
            <li>
              <code>PUBLIC_HEADERS</code> the list of header files
            </li>
            <li>
              <code>SOURCES</code> the list of source files
            </li>
            <li>
              <code>PUBLIC_DEPENDENCIES</code> the list of CMake target public dependencies, they will be inherited when depending on your library
            </li>
            <li>
              <code>PRIVATE_DEPENDENCIES</code> the list of CMake target private dependencies
            </li>
          </ul>
        </li>
      </ol>
  
      <p :class="paragraph">
        If you want to compile the tests and enabled the <code>MYMODULE_WITH_TESTS</code> option. 
        You can add tests for each library, here an example with mylib: 
        <ol>
          <li>
            open tests/CMakeLists.txt and ensure there is the call <code>add_subdirectory(mylib)</code> 
          </li>
          <li>
            open tests/mylib/CMakeLists.txt and use one call <code>add_geode_test</code> by test. Here are the parameters:
            <ul>
              <li>
                <code>SOURCE</code> the test file (path relative to tests/mylib)
              </li>
              <li>
                <code>DEPENDENCIES</code> the list of CMake target dependencies
              </li>
            </ul>
          </li>
        </ol>
      </p>
    
      <p :class="paragraph">
        Your CMakeLists.txt is now ready.
      </p>
  
      <h2 :class="section">
        Last step - Configure and build your module
      </h2>

      <p :class="paragraph">
        As for OpenGeode <href="opengeode_how_to_compile"> configuration and compilation</a>,
        this step depends on your platform.
        Follow <href="opengeode_how_to_compile_module"> this page</a> to learn how to configure
        and compile your own module.
      </p>

      <p :class="paragraph">
        Follow the same procedure than for OpenGeode but by
        specifying the `CMAKE_PREFIX_PATH` to OpenGeode install path.
        For example:
      </p>

      <code>cmake -DCMAKE_PREFIX_PATH=path/to/OpenGeode/build/opengeode/install ..</code>

      <p :class="paragraph">
        The last thing to do is to modify headers (.h) and sources (.cpp) files by replacing
        <code>mylib</code> by the name your choose for your libs and
        <code>mymodule</code> by the name of your module.
      </p>
    
      <p :class="paragraph">
        Don't forget to also do it for the tests directory if you enabled the <code>MYMODULE_WITH_TESTS</code> option!
      </p>

      <p :class="paragraph">
        The rest is up to you!
      </p>

      <h2 :class="section">
        Additional info - What are these files in module repository
      </h2>

      <p :class="paragraph">
        Template repository contains some files.
        Here is information on these files:
      </p>

      <ul :class="paragraph">
        <li>
          <strong>LICENSE</strong> - In this file you specify the Licence of your module
        </li>
        <li>
          <strong>README.md</strong> - This file is used as overview of your GitHub project.
          Add any information you consider necessary.
        </li>
        <li>
          <strong>.clang-format</strong> - Format rules file used by clang.
          Run it by your own or automatize formatting using this file and CI tools.
        </li>
        <li>
          <strong>.gitattributes</strong> - List of attributes on files and folders
          (e.g. ignored by GitHub for repository languages)
        </li>
        <li>
          <strong>.gitignore</strong> - List of files and folders ignored by Git.
        </li>
        <li>
          <strong>.releaserc</strong> - Configuration file for semantic-release.
          Have a look at
          <a
            href="https://github.com/semantic-release/semantic-release"
          >https://github.com/semantic-release/semantic-release</a> it's great!
        </li>
        <li>
          <strong>.github/workflows/{CI.yml,CD.yml}</strong> - Configuration files for Github Actions
          (
          <a href="https://github.com/features/actions">https://github.com/features/actions</a>)
          for code formatting, code testing, release generation and upload, ...
          Be aware that the variables used in these files are
          configured for `OpenGeode-ModuleTemplate` repository.
          They have to be modified depending on your project and your needs.
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    section: 'display-2 ma-5 pa-5',
    subsection: 'display-1 ma-5 pa-5',
    subsubsection: 'title ma-5 pa-5',
    paragraph: 'body-1 my-5',
    brep: "<a href='/opengeode?page=class_geode_BRep.html'><code>BRep</code></a>",
  }),
}
</script>

