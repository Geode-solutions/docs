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

# class Growable


## Functions

### Growable

```cpp
public void Growable<Archive, T>(absl::FixedArray<std::function<void (Archive &, T &)> > serializers)
```


### serialize

```cpp
public void serialize(Archive & ser, const T & obj, Fnc && fnc)
```


### deserialize

```cpp
public void deserialize(Archive & des, T & obj, Fnc && fnc)
```




