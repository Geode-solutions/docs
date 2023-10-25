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

# class AssimpMeshInput


## Functions

### AssimpMeshInput

```cpp
public void AssimpMeshInput<Mesh>(string_view filename)
```


### ~AssimpMeshInput

```cpp
public void ~AssimpMeshInput<Mesh>()
```


### read_file

```cpp
public int read_file()
```




# class AssimpMeshInput

# class AssimpMeshInput

