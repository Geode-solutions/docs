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

# class BackgroundMeshImpl


## Functions

### BackgroundMeshImpl

```cpp
public void BackgroundMeshImpl<Background>(const Mesh & mesh)
```


### mesh

```cpp
public const Mesh & mesh()
```


### clone

```cpp
public std::tuple<std::unique_ptr<Mesh>, std::unique_ptr<Background> > clone()
```


### clone_mesh

```cpp
public std::unique_ptr<Mesh> clone_mesh()
```




