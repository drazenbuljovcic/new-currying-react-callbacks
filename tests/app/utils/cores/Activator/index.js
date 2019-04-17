import Activator from '../../../../../src/app/utils/cores/Activator';

describe('Activator tests', () => {
  it('Shields against improper state on initialization', () => {
    expect(() => {
      Activator({ status: 'NO' });
    }).toThrow();
  });

  it('Should initialize as with status OFF', () => {
    const activator = Activator();

    expect(activator.isActive()).toBe(false);
    expect(activator.getStatus()).toBe(Activator.STATUSES.OFF);
  });

  it('Properly uses dedicated active setter function', () => {
    const activator = Activator();

    activator.setActiveStatus();

    expect(activator.isActive()).toBe(true);
    expect(activator.getStatus()).toBe(Activator.STATUSES.ON);
  });

  it('Properly uses dedicated inactive setter function', () => {
    const activator = Activator();

    activator.setInactiveStatus();

    expect(activator.isActive()).toBe(false);
    expect(activator.getStatus()).toBe(Activator.STATUSES.OFF);
  });

  it('Shields against improper state on toggles', () => {
    const activator = Activator();
    expect(() => {
      activator.toggleStatus({ status: 'NO' });
    }).toThrow();
  });

  it('Properly compares statuses', () => {
    const activator = Activator({ status: Activator.STATUSES.ON });
    expect(activator.compareStatus(Activator.STATUSES.ON)).toBeTruthy();
  });
});
