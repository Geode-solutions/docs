# class Growable

```cpp
Defined at ../../include/geode/basic/bitsery_archive.h#84
```

## Functions

### Growable

```cpp
public void Growable<Archive, T>(absl::FixedArray<std::function<void (Archive &, T &)> > serializers)
```

```cpp
Defined at ../../include/geode/basic/bitsery_archive.h#87
```

### serialize

```cpp
public void serialize(Archive & ser, const T & obj, Fnc && fnc)
```

```cpp
Defined at ../../include/geode/basic/bitsery_archive.h#95
```

### deserialize

```cpp
public void deserialize(Archive & des, T & obj, Fnc && fnc)
```

```cpp
Defined at ../../include/geode/basic/bitsery_archive.h#103
```



