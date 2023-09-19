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




