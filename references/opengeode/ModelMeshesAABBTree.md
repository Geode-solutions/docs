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

# struct ModelMeshesAABBTree


## Members

```cpp
public AABBTree<dimension> components_tree_

```

```cpp
public absl::FixedArray<AABBTree<dimension> > mesh_trees_

```

```cpp
public FixedArray uuids_

```

```cpp
public flat_hash_map mesh_tree_ids_

```



## Functions

### ModelMeshesAABBTree

```cpp
public void ModelMeshesAABBTree<dimension>(index_t nb_components)
```




