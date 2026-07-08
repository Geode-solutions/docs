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

# class SectionMedialBallExtractor


```cpp
Inherits from ModelMedialBallExtractor
```



## Records

Options



## Functions

### SectionMedialBallExtractor

```cpp
public void SectionMedialBallExtractor(const SectionMedialBallExtractor & )
```


### SectionMedialBallExtractor

```cpp
public void SectionMedialBallExtractor(SectionMedialBallExtractor && )
```


### operator=

```cpp
public SectionMedialBallExtractor & operator=(const SectionMedialBallExtractor & )
```


### operator=

```cpp
public SectionMedialBallExtractor & operator=(SectionMedialBallExtractor && )
```


### SectionMedialBallExtractor

```cpp
public void SectionMedialBallExtractor(const Section & section, Options & options)
```


### ~SectionMedialBallExtractor

```cpp
public void ~SectionMedialBallExtractor()
```


### compute_all_surfaces

```cpp
public absl::linked_hash_map<uuid, std::unique_ptr<PointSet2D>> compute_all_surfaces()
```


### compute_surface

```cpp
public std::unique_ptr<PointSet2D> compute_surface(const uuid & surface_id)
```




