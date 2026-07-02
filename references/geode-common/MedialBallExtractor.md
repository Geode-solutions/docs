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

# class MedialBallExtractor


## Members

```cpp
public static const auto RADIUS_ATTRIBUTE_NAME

```

```cpp
public static const auto ORIGIN_ATTRIBUTE_NAME

```



## Records

Options



## Functions

### MedialBallExtractor

```cpp
public void MedialBallExtractor(const MedialBallExtractor & )
```


### MedialBallExtractor

```cpp
public void MedialBallExtractor(MedialBallExtractor && )
```


### operator=

```cpp
public MedialBallExtractor & operator=(const MedialBallExtractor & )
```


### operator=

```cpp
public MedialBallExtractor & operator=(MedialBallExtractor && )
```


### MedialBallExtractor

```cpp
public void MedialBallExtractor(const BRep & brep, Options & options)
```


### ~MedialBallExtractor

```cpp
public void ~MedialBallExtractor()
```


### compute_all_blocks

```cpp
public absl::linked_hash_map<uuid, std::unique_ptr<PointSet3D>> compute_all_blocks()
```


### compute_block

```cpp
public std::unique_ptr<PointSet3D> compute_block(const uuid & block_id)
```




