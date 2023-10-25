<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class OpenGeodeImplicitStructuralModelOutput


```cpp
Inherits from ImplicitStructuralModelOutput
```



## Functions

### OpenGeodeImplicitStructuralModelOutput

```cpp
public void OpenGeodeImplicitStructuralModelOutput(string_view filename)
```


### extension

```cpp
public string_view extension()
```


### archive_implicit_model_files

```cpp
public void archive_implicit_model_files(const ZipFile & zip_writer)
```


### save_implicit_model_files

```cpp
public void save_implicit_model_files(const ImplicitStructuralModel & implicit_model, string_view directory)
```


### write

```cpp
public void write(const ImplicitStructuralModel & implicit_model)
```




