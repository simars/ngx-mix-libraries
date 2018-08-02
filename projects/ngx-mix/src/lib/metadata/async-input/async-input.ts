import { ReplaySubject } from 'rxjs';

type PropToSubjectMap = Map<string, ReplaySubject<any>>;

const subjects: WeakMap<Object, PropToSubjectMap> = new WeakMap();

/**
 *
 * This decorator replaces input with a property, the getter returns a value with type Observable<T> while the setter expects a variable of type T.
 * @AsyncInput() is designed to be used with @Input()
 *
 */
export function AsyncInput() {
  return (target, prop) => {
    delete target[prop];

    Object.defineProperty(target, prop, {
      set(value) {
        this[prop].next(value);
      },
      get() {
        const subjectByProp: PropToSubjectMap = subjects.get(this) || new Map();
        let subject = subjectByProp.get(prop);
        if (! subject)  {
          subject = new ReplaySubject<any>(1);
          subjectByProp.set(prop, subject);
          subjects.set(this, subjectByProp);
        }
        return subject;
      },
    });
  };
}
